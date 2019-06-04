/**
* JEST Configuration file
* https://facebook.github.io/jest/docs/configuration.html
*/

module.exports = {
  setupFiles: ['<rootDir>/jest/setupTests.js'],
  verbose: true,
  testURL: "http://localhost/",
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'js'],
  moduleNameMapper: {
    "js/components(.*)$": "<rootDir>/js/components/$1",
    "js/modules(.*)$": "<rootDir>/js/modules/$1",
    "js/views(.*)$": "<rootDir>/js/views/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  testMatch: [ "**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)" ],
};

