import plain from './plain.js';
import json from './json.js';
import stylish from './stylish.js';

export default (formatName = 'stylish') => {
  switch (formatName) {
    case 'plain':
      return plain;
    case 'json':
      return json;
    case 'stylish':
    case undefined:
      return stylish;
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};
