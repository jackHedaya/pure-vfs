import { EventEmitter } from 'events'

interface props {
  fromDir?: string
}

export default class FileSystem extends EventEmitter {
  constructor(props: props) {
    super()
  }
}
