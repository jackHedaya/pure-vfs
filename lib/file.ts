import DirectoryItem from './directoryItem'
import { fs } from 'mz'

export default class File extends DirectoryItem {
  private _content: string = ''

  constructor(name: string) {
    super(name)
  }

  get content() {
    return this._content
  }

  set content(newContent) {
    if (this.parentFileSystem && this.parentFileSystem.initConfig.attach) {
      fs.writeFile(this.path, newContent)
        .then(_ => (this._content = newContent))
        .catch(_ => {
          throw `PureVFS: Error while writing to ${this.path}`
        })
    } else this._content = newContent
  }
}
