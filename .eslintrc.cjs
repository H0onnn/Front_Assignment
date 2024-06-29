module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/prop-types": "off",
  },
  settings: {
    react: { version: "detect" },
  },
}
