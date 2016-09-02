require('babel-register')();

function ignoreCSS () { return null };
require.extensions['.css'] = ignoreCSS;

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.fetch = () => {};
global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;