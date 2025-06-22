import parse from './parsers.js';
import diffGenerator from './diffGenerator.js';
import format from './formatters/index.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  const diff = diffGenerator(data1, data2);
  return format(formatName)(diff);
};

export default gendiff;
