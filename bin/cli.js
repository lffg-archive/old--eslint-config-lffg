#!/usr/bin/env node

(() => {
  const pkg = require('../package.json');
  console.log(`${pkg.name} → ${pkg.version}`);
})();
