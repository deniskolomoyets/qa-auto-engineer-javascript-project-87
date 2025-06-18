import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import parse from '../src/parsers.js';
import diffGenerator from '../src/diffGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff flat JSON', () => {
  const file1 = parse(getFixturePath('file1.json'));
  const file2 = parse(getFixturePath('file2.json'));
  const expected = readFile('result.txt').trim();

  expect(diffGenerator(file1, file2)).toBe(expected);
});
