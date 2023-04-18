module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.js?$": "babel-jest",
    '^.+\\.css$': 'jest-css-modules-transform'
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: 'jest-environment-jsdom',

};
