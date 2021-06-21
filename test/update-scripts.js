const t = require('tap')
const updateScripts = require('../lib/update-scripts.js')

t.test('no scripts content, no originalContent', async t => {
  const result = updateScripts({
    content: { name: 'foo', version: '1.1.1' },
  })
  t.strictSame(
    result,
    {},
    'should return empty result'
  )
})

t.test('no scripts content, some originalContent', async t => {
  const result = updateScripts({
    content: {},
    originalContent: { name: 'foo', version: '1.1.1' },
  })
  t.strictSame(
    result,
    { name: 'foo', version: '1.1.1' },
    'should return original content'
  )
})

t.test('new scripts content, no originalContent', async t => {
  const result = updateScripts({
    content: { scripts: { 'new-script': 'foo' } },
    originalContent: {},
  })
  t.strictSame(
    result,
    { scripts: { 'new-script': 'foo' } },
    'should return obj containing new scripts content'
  )
})

t.test('new scripts content, some originalContent but no scripts', async t => {
  const result = updateScripts({
    content: { scripts: { 'new-script': 'foo' } },
    originalContent: { name: 'foo', version: '1.0.0' },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.0.0',
      scripts: { 'new-script': 'foo' },
    },
    'should return original content along with new scripts'
  )
})

t.test('modify existing scripts', async t => {
  const result = updateScripts({
    content: {
      scripts: {
        foo: 'touch foo',
        bar: 'touch bar',
      },
    },
    originalContent: {
      name: 'foo',
      version: '1.0.0',
      scripts: {
        foo: 'touch NOTFOO',
        bar: 'bar',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.0.0',
      scripts: {
        foo: 'touch foo',
        bar: 'touch bar',
      },
    },
    'should replace existing script'
  )
})

t.test('remove existing scripts', async t => {
  const result = updateScripts({
    content: {
      scripts: {
        foo: 'touch foo',
      },
    },
    originalContent: {
      name: 'foo',
      version: '1.0.0',
      scripts: {
        foo: 'touch foo',
        bar: 'bar',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.0.0',
      scripts: {
        foo: 'touch foo',
      },
    },
    'should remove script'
  )
})

t.test('new INVALID scripts content, some originalContent', async t => {
  t.throws(
    () => updateScripts({
      content: { scripts: { foo: 1234 } },
      originalContent: {},
    }),
    { code: 'ESCRIPTSINVALID' },
    'should throw an invalid script error'
  )
})
