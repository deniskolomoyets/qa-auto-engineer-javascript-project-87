import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test('gendiff flat JSON', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('plain-result.txt');

  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(expected);
});

test('gendiff flat YAML', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('plain-result.txt');

  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(expected);
});

test('gendiff flat JSON (plain)', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('plain-result.txt');
  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(expected);
});

test('gendiff flat YAML (plain)', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('plain-result.txt');
  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toBe(expected);
});
