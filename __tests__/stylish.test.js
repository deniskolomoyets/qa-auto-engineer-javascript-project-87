import stylish from '../src/formatters/stylish.js'

test('stylish formatter', () => {
  const data = [
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
    { key: 'proxy', type: 'deleted', value: '123.234.53.22' },
    { key: 'verbose', type: 'added', value: true },
  ]

  const expected = [
    '{',
    '    host: hexlet.io',
    '  - timeout: 50',
    '  + timeout: 20',
    '  - proxy: 123.234.53.22',
    '  + verbose: true',
    '}',
  ].join('\n')

  expect(stylish(data)).toEqual(expected)
})
