module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.js'],
  coverageReporters: ['lcov', 'text'],
  testEnvironment: 'jsdom'
}
