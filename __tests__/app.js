'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-test')

describe('generator-cmmc-kidbright-plugin:app', () => {
  beforeAll((done) => {
    var testPath = path.join(__dirname, 'temp')
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withPrompts({ pluginName: 'NTTRandom', pluginType: 'DEVIO' })
      .on('end', done)
  })

  it('creates files', () => {
    assert.file([
      'generators.js',
      'blocks.js',
      'NTTRandom.h',
      'NTTRandom.cpp'
    ])
  })
})
