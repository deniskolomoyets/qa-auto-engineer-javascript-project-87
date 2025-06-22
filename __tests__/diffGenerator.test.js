import genDiff from '../src/diffGenerator.js'

test('diffGenerator: flat structure', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
  }

  const obj2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  }

  const expected = [
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'proxy', type: 'deleted', value: '123.234.53.22' },
    { key: 'timeout', type: 'changed', oldValue: 50, newValue: 20 },
    { key: 'verbose', type: 'added', value: true },
  ]

  expect(genDiff(obj1, obj2)).toEqual(expected)
})

test('diffGenerator: nested structure', () => {
  const obj1 = {
    common: {
      setting1: 'Value 1',
      setting2: 200,
      setting3: true,
    },
  }

  const obj2 = {
    common: {
      setting1: 'Value 1',
      setting3: null,
      setting4: 'blah blah',
    },
  }

  const expected = [
    {
      key: 'common',
      type: 'nested',
      children: [
        { key: 'setting1', type: 'unchanged', value: 'Value 1' },
        { key: 'setting2', type: 'deleted', value: 200 },
        { key: 'setting3', type: 'changed', oldValue: true, newValue: null },
        { key: 'setting4', type: 'added', value: 'blah blah' },
      ],
    },
  ]

  expect(genDiff(obj1, obj2)).toEqual(expected)
})
