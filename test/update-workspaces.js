const t = require('tap')
const updateWorkspaces = require('../lib/update-workspaces.js')

t.test('no workspaces content, no originalContent', async t => {
  const result = updateWorkspaces({
    content: { name: 'foo', version: '1.1.1' },
  })
  t.strictSame(
    result,
    {},
    'should return empty result'
  )
})

t.test('no workspaces content, some originalContent', async t => {
  const result = updateWorkspaces({
    content: {},
    originalContent: { name: 'foo', version: '1.1.1' },
  })
  t.strictSame(
    result,
    { name: 'foo', version: '1.1.1' },
    'should return original content'
  )
})

t.test('new workspaces content, no originalContent', async t => {
  const result = updateWorkspaces({
    content: { workspaces: ['/foo/bar'] },
  })
  t.strictSame(
    result,
    {
      workspaces: ['/foo/bar'],
    },
    'should return result containing new workspaces'
  )
})

t.test('new workspaces content, some originalContent but no ws', async t => {
  const result = updateWorkspaces({
    content: { workspaces: ['./packages/*'] },
    originalContent: { name: 'foo', version: '1.1.1' },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.1.1',
      workspaces: ['./packages/*'],
    },
    'should return original content with new workspaces'
  )
})

t.test('new workspaces content, some originalContent WITH ws', async t => {
  const result = updateWorkspaces({
    content: { workspaces: ['./a', './b'] },
    originalContent: {
      name: 'foo',
      version: '1.1.1',
      workspaces: ['./a'],
    },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.1.1',
      workspaces: ['./a', './b'],
    },
    'should return original content with concatenated workspaces'
  )
})

t.test('add new workspace, remove some other one', async t => {
  const result = updateWorkspaces({
    content: { workspaces: ['foo', 'bar'] },
    originalContent: {
      name: 'foo',
      version: '1.1.1',
      workspaces: ['bar', 'baz'],
    },
  })
  t.strictSame(
    result,
    {
      name: 'foo',
      version: '1.1.1',
      workspaces: ['foo', 'bar'],
    },
    'should return original content with new workspaces'
  )
})

t.test('new INVALID workspaces content, some originalContent', async t => {
  t.throws(
    () => updateWorkspaces({
      content: { workspaces: 1234 },
      originalContent: {
        name: 'foo',
        version: '1.1.1',
      },
    }),
    { code: 'EWORKSPACESINVALID' },
    'should throw error on invalid workspaces property'
  )
  t.throws(
    () => updateWorkspaces({
      content: { workspaces: ['a', 'b', 1234] },
      originalContent: {
        name: 'foo',
        version: '1.1.1',
      },
    }),
    { code: 'EWORKSPACESINVALID' },
    'should throw error on any invalid workspaces values'
  )
})
