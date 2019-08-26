import FileSystem from './fileSystem'
import path from 'path'

export default abstract class DirectoryItem {
  name: string
  parentFileSystem?: FileSystem

  constructor(name: string) {
    this.name = name
  }

  get path() {
    return path.join(this.parentFileSystem ? this.parentFileSystem.path : '/', this.name)
  }

  abstract hash(): { path: string, hash: string }

  abstract writeToSystem(): Promise<void>
}
