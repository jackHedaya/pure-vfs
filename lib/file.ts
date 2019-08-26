import hash from 'object-hash'
import fs from 'mz/fs'

import DirectoryItem from './directoryItem'

export default class File extends DirectoryItem {
  private content: string = ''

  constructor(name: string, content: string = '') {
    super(name)

    this.content = content
  }

  writeToSystem() {
    return fs.writeFile(this.path, this.content)
  }

  hash() {
    return { path: this.path, hash: hash({ name: this.name, path: this.path, content: this.content }) }
  }
}
