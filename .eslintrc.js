/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable indent */
module.exports = {
  // eslint-disable-next-line quote-props
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "no-console": 0,
    "no-shadow": 0,
    "no-trailing-spaces": 0,
    "no-underscore-dangle": 0,
    "import/newline-after-import": 0,
    "no-unused-vars": 0,
    "spaced-comment": 0,
    "keyword-spacing": 0,
    "object-curly-spacing": 0,
    "object-curly-newline": 0,
  },
};
