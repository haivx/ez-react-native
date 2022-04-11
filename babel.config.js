/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
  }
}
