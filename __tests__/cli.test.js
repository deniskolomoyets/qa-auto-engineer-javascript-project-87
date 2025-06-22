import { execSync } from 'node:child_process'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('gendiff CLI: json output', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')

  const command = `node ./gendiff.js "${filepath1}" "${filepath2}" --format json`
  const result = execSync(command)

  expect(result.toString()).toContain('{')
})
