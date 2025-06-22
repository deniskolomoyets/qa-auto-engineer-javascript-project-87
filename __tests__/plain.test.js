import plain from '../src/formatters/plain.js'

test('plain formatter', () => {
  const diff = [
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
    { key: 'proxy', type: 'deleted', value: '123.234.53.22' },
    { key: 'verbose', type: 'added', value: true },
    { key: 'nested', type: 'added', value: { key: 'value' } },
  ]

  const expected = [
    'Property \'timeout\' was updated. From 50 to 20',
    'Property \'proxy\' was removed',
    'Property \'verbose\' was added with value: true',
    'Property \'nested\' was added with value: [complex value]',
  ].join('\n')

  expect(plain(diff)).toBe(expected)
})
