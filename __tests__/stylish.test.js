import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import stylish from '../src/formatters/stylish.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('stylish formatter', () => {
  const data = readFileSync(getFixturePath('json-result.txt'), 'utf-8')
  const diffTree = JSON.parse(data)

  const expected = [
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
  ].join('\n')
  expect(stylish(diffTree)).toBe(`{\n${expected}\n}`)
})

test('stylish: unknown type throws error', () => {
  const tree = [{ key: 'bad', type: '???', value: 1 }]
  expect(() => stylish(tree)).toThrow(/Unknown type/)
})
