import { execSync } from 'node:child_process'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('gendiff CLI: json output', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const command = `node ./gendiff.js "${filepath1}" "${filepath2}" --format json`
  const result = execSync(command).toString()
  expect(() => JSON.parse(result)).not.toThrow()
})

test('gendiff CLI: stylish output', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const command = `node ./gendiff.js "${filepath1}" "${filepath2}" --format stylish`
  const result = execSync(command).toString().trim()
  const expected = readFileSync(getFixturePath('result.txt'), 'utf-8').trim()
  expect(result).toBe(expected)
})

test('gendiff CLI: plain output', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const command = `node ./gendiff.js "${filepath1}" "${filepath2}" --format plain`
  const result = execSync(command).toString().trim()
  const expected = readFileSync(getFixturePath('plain-result.txt'), 'utf-8').trim()
  expect(result).toBe(expected)
})

test('gendiff CLI: stylish output with YAML', () => {
  const filepath1 = getFixturePath('file1.yml')
  const filepath2 = getFixturePath('file2.yml')
  const command = `node ./gendiff.js "${filepath1}" "${filepath2}" --format stylish`
  const result = execSync(command).toString().trim()
  const expected = readFileSync(getFixturePath('result.txt'), 'utf-8').trim()
  expect(result).toBe(expected)
})
