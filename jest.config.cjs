module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true, // Enables code coverage
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  coverageDirectory: 'code-coverage/jest-coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@mdxeditor/editor).+\\.js$",
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};