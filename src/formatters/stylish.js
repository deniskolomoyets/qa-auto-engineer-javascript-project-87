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
        return `  + ${key}: ${JSON.stringify(value)}`;
      case 'deleted':
        return `  - ${key}: ${JSON.stringify(value)}`;
      case 'unchanged':
        return `    ${key}: ${JSON.stringify(value)}`;
      case 'changed':
        return `  - ${key}: ${JSON.stringify(oldValue)}\n  + ${key}: ${JSON.stringify(newValue)}`;
      default:
        throw new Error(`Unknown type: '${type}'`);
    }
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default iter;
