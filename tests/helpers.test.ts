import findWithIndex from '../lib/helpers/findWithIndex'
const myArr = ['hello', 'world', 'yoda']

describe('findWithIndex', () => {
  test('it should find a value and an item in an array', () => {
    const f = findWithIndex(myArr, val => val === 'yoda')

    expect(f).toEqual({ item: 'yoda', index: 2 })
  })

  test('it should return -1 and null when an item is not found', () => {
    const f = findWithIndex(myArr, val => val === 'shebang')

    expect(f).toEqual({ item: null, index: -1 })
  })
})
