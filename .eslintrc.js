module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'eslint-plugin'],
  rules: {
    // Add your custom rules here
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types for functions (useful for React components)
    'react/react-in-jsx-scope': 'off', // React 17 does not require the import of React for JSX
    'react/display-name': 'off', // Disable display name requirement for components
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      plugins: ['eslint-plugin'],
      rules: {
        'eslint-plugin/report-message-format': ['error', '^[A-Z`]+:'],
        'eslint-plugin/prefer-placeholders': 'error',
      },
    },
  ],
};
