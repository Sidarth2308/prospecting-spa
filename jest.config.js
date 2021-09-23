/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig');
module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // "@clients/(.*)": "<rootDir>/src/services/core-api/functions/clients/$1",
    // "@advisors/(.*)": "<rootDir>/src/services/core-api/functions/advisors/$1",
    // "@suborganizations/(.*)": "<rootDir>/src/services/core-api/functions/suborganizations/$1",
    // "@organizations/(.*)": "<rootDir>/src/services/core-api/functions/organizations/$1",
    // "@core-api/(.*)": "<rootDir>/src/services/core-api/$1",
    // "@libs/(.*)": "<rootDir>/src/libs/$1",
    // "@common/(.*)": "<rootDir>/src/libs/common/$1",
    // "@helpers/(.*)": "<rootDir>/src/libs/common/helpers/$1",
    // "@utils/(.*)": "<rootDir>/src/libs/utils/$1",
    // "@models/(.*)": "<rootDir>/src/libs/models/$1",
  },

  globals: {
    'ts-jest': {
      importHelpers: true,
    },
  },
};
