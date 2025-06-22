const formatValue = (value) => {
  if (value === null) return 'null'
  if (typeof value === 'object') return '[complex value]'
  if (typeof value === 'string') return `'${value}'`
  return String(value)
}

const plain = (diffTree) => {
  const iter = (nodes, path = '') => nodes
    .map((node) => {
      const property = path ? `${path}.${node.key}` : node.key

      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${formatValue(node.value)}`
        case 'deleted':
          return `Property '${property}' was removed`
        case 'changed':
          return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`
        case 'unchanged':
          return null
        default:
          throw new Error(`Unknown type: ${node.type}`)
      }
    })
    .filter(Boolean)
    .join('\n')

  return iter(diffTree)
}

export default plain
