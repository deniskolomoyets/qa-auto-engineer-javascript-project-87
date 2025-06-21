import plain from './plain.js';

export default (formatName) => {
  switch (formatName) {
    case 'plain':
      return plain;
    case undefined:
    case 'stylish':
      // если захочешь позже stylish вернуть — подключи его
      throw new Error('Stylish formatter not implemented');
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};
