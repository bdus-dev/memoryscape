module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [ 'airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [ 'react', 'react-hooks'],
  rules: {
    "semi": ["error", "always"],
    "react/jsx-filename-extension": "warn",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
};
