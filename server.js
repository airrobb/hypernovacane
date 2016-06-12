const express = require('express');
const Renderer = require('hypernova-client');
const devModePlugin = require('hypernova-client/plugins/devModePlugin');
const MyComponent = require('./src/components/MyComponent')
const app = express();

const renderer = new Renderer({
  url: 'http://localhost:3030',
  plugins: [
    devModePlugin,
  ]
});

app.get('/', (req, res) => {
  const jobs = {
    MyComponent: MyComponent({name: 'Stranger'})
    };

  renderer.render(jobs).then(html => {
    console.log(html)
    res.send(html)
  });
});

app.listen(8080, () => console.log('Now listening'));
