module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    clearMocks: true,
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    coverageDirectory: './reports/coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    coverageReporters: [
        'text',
        'lcov'
    ],
    reporters: [
        'default',
        'jest-junit'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    testMatch: [
        '**/?(*.)+(test).ts'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ]
};
