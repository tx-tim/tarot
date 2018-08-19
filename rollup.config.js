
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy-assets'

export default [{
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [ resolve(),
    copy({
      assets: [
        './src/images'
      ]
    })
  ]
},
{
  input: 'src/deck.js',
  output: {
    file: 'dist/deck.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    copy({
      assets: [
        './src/images'
      ]
    })
  ]
}]
