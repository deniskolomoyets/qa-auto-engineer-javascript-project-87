const formatValue = (val) => {
  if (val === null) return null;
  if (typeof val === 'boolean' || typeof val === 'number') return val;
  return String(val);
};

const iter = (tree) => {
  const lines = tree.map((node) => {
    const {
      key,
      type,
      value,
      oldValue,
      newValue,
    } = node;

    switch (type) {
      case 'added':
        return `  + ${key}: ${formatValue(value)}`;
      case 'deleted':
        return `  - ${key}: ${formatValue(value)}`;
      case 'unchanged':
        return `    ${key}: ${formatValue(value)}`;
      case 'changed':
        return `  - ${key}: ${formatValue(oldValue)}\n  + ${key}: ${formatValue(newValue)}`;
      default:
        throw new Error(`Unknown type: '${type}'`);
    }
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default iter;
