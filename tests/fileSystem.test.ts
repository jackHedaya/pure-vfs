import fs from 'mz/fs'
import FileSystem from '../lib/fileSystem'
import File from '../lib/file'
import rimraf from 'rimraf'

beforeAll(() => {
  fs.mkdirSync('./fake')
})

afterAll(() => {
  rimraf.sync('./fake')
})

beforeEach(() => {
  fs.writeFile('./fake/test.txt', 'this is some text')
})

describe('FileSystem', () => {
  test('should write if attached is true', async () => {
    const myfs = new FileSystem({ fromDir: './fake', attach: true })
    await myfs.add(new File('shebang.txt'))
    expect(fs.existsSync('./fake/shebang.txt')).toBe(true)
  })
})
