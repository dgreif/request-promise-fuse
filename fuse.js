/* eslint-disable babel/new-cap */
const { FuseBox, JSONPlugin } = require('fuse-box')

const
  fuseBox = FuseBox.init({
    output: './lib/$name.js',
    target: 'server',
    cache: false,
    plugins: [
      JSONPlugin()
    ]
  })

fuseBox.bundle('app').instructions('> index.ts')

return fuseBox.run()
