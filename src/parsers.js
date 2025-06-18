import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => (
  path.isAbsolute(filepath)
    ? filepath
    : path.resolve(process.cwd(), '__fixtures__', filepath)
);

const parse = (filepath) => {
  const fullPath = getFullPath(filepath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(data);
};

export default parse;
