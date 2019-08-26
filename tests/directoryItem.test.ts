import File from '../lib/file'

describe('Directory Item', () => {
  test('#.hash() return a valid hash based on item values', () => {
    const f = new File('hello.txt')

    expect(typeof f.hash().hash).toBe('string')
  })
})
