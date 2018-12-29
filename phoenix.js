#!/usr/local/bin/babel --preset env

require('./src/core/Screen.js');
require('./src/core/Key.js');
require('./src/index.js');

Phoenix.notify('Config reloaded');
