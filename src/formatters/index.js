import plain from './plain.js';
import json from './json.js';

export default (formatName) => {
  switch (formatName) {
    case 'plain':
      return plain;
    case undefined:
    case 'stylish':
      throw new Error('Stylish formatter not implemented');
    case 'json':
      return json;
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};
