import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const getFullPath = (filepath) => (
  path.isAbsolute(filepath)
    ? filepath
    : path.resolve(process.cwd(), '__fixtures__', filepath)
)

const parse = (filepath) => {
  const fullPath = getFullPath(filepath)
  const data = fs.readFileSync(fullPath, 'utf-8')
  const ext = path.extname(filepath)
  if (ext === '.json') return JSON.parse(data)
  if (ext === '.yml' || ext === '.yaml') return yaml.load(data)
  throw new Error(`Unsupported file type: ${ext}`)
}

export default parse
