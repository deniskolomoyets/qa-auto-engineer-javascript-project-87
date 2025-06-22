import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'
import gendiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => readFileSync(getFixturePath(filename), 'utf-8').trim()

test('gendiff JSON plain', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const expected = readFile('plain-result.txt')
  expect(gendiff(filepath1, filepath2, 'plain')).toBe(expected)
})

test('gendiff YAML plain', () => {
  const filepath1 = getFixturePath('file1.yml')
  const filepath2 = getFixturePath('file2.yml')
  const expected = readFile('plain-result.txt')
  expect(gendiff(filepath1, filepath2, 'plain')).toBe(expected)
})

test('gendiff JSON stylish', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const expected = readFile('result.txt')
  expect(gendiff(filepath1, filepath2, 'stylish')).toBe(expected)
})

test('gendiff JSON json', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const result = gendiff(filepath1, filepath2, 'json')
  expect(() => JSON.parse(result)).not.toThrow()
})
