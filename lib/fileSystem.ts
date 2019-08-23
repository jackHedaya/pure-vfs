import { EventEmitter } from 'events'
import DirectoryItem from './directoryItem'

interface config {
  fromDir?: string
  attach?: boolean
}

export default class FileSystem extends EventEmitter {
  private _contents: DirectoryItem[]
  initConfig: config

  path: string

  constructor(config: config) {
    super()

    this.initConfig = config
    this._contents = []

    this.path = config.fromDir || '/'
  }

  add(item: DirectoryItem) {
    const itm = item
    itm.parentFileSystem = this

    this._contents.push(itm)
  }
}
