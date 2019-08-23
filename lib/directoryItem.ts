import FileSystem from './fileSystem'
import { fs } from 'mz'
import path from 'path'

export default class DirectoryItem {
  private _name: string
  parentFileSystem?: FileSystem

  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    if (this.parentFileSystem && this.parentFileSystem.initConfig.attach) {
      fs.rename(this.path, path.join(this.parentFileSystem.path, newName))
        .then(_ => (this._name = newName))
        .catch(_ => {
          throw `PureVFS: Unable to change name from ${this._name} to ${newName}`
        })
    } else this._name = name
  }

  get path() { return path.join(this.parentFileSystem ? this.parentFileSystem.path : "/", this.name) }
}
