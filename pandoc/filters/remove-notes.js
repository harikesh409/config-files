#!/usr/bin/env node

/**
 * Remove all notes (```note ```)
 */

const pandoc = require('pandoc-filter');
const { Null } = pandoc;

function action(type, value) {
  if (type === 'CodeBlock' && value[0][1][0] === 'note') {
    return Null();
  }
}

pandoc.stdio(action);
