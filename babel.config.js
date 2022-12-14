/* eslint-disable no-undef */
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ],
  plugins: [
    ['@babel/plugin-syntax-decorators', { decoratorsBeforeExport: false }]
  ]
}