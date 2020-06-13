module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: [],
      exclude: /(server|element-ui)/i
    }
  }
}
