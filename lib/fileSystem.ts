import { EventEmitter } from 'events'
import DirectoryItem from './directoryItem'
import fs from 'mz/fs'
import findWithIndex from './helpers/findWithIndex'
import rimraf = require('rimraf')

interface config {
  fromDir?: string
  attach?: boolean
}

interface hashedContent {
  path: string
  hash: string
}

export default class FileSystem extends EventEmitter {
  private _contents: DirectoryItem[] = []
  private _hashedContents: hashedContent[] = []
  initConfig: config

  path: string

  constructor(config: config) {
    super()

    this.initConfig = config

    this.path = config.fromDir || '/'
  }

  add(item: DirectoryItem) {
    const itm = item
    itm.parentFileSystem = this

    this._contents.push(itm)

    if (this.initConfig.attach) return this.write()
  }

  remove(itemName: string) {
    const index = this._contents.findIndex(item => item.name === itemName)

    this._contents.splice(index, 1)

    if (this.initConfig.attach) return this.write()
  }

  /**
   * Writes to the file system
   */
  async write() {
    var promises: Promise<any>[] = []
    var newHashedContents: hashedContent[] = []

    this._contents.forEach(async item => {
      const itemHash = item.hash()
      const { item: prevHash, index: hashedContentIndex } = findWithIndex(
        this._hashedContents,
        val => val.path === item.path
      )

      if (!prevHash || prevHash.hash !== itemHash.hash) {
        promises.push(
          item
            .writeToSystem()
            .then(_ => this._hashedContents.push(itemHash))
            .catch(_ => `PureVFS: Error while writing at ${item.path}`)
        )
      }

      if (hashedContentIndex) this._hashedContents.splice(hashedContentIndex, 1)

      newHashedContents.push(itemHash)
    })

    return Promise.all([
      ...promises,
      ...this.hardDeleteHashed(() => {
        this._hashedContents = newHashedContents
      }),
    ]).catch(err => {
      throw err
    })
  }

  private hardDeleteHashed(callback: () => void): Promise<any>[] {
    var promises: Promise<any>[] = []
    for (var i of this._hashedContents) {
      const p = new Promise((resolve, reject) => {
        rimraf(i.path, { disableGlob: true }, err => (err ? resolve() : reject(err)))
      })

      promises.push(p)
    }

    callback()
    return promises
  }
}
