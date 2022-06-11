const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate')

module.exports = {
  root: true,
  customSyntax: "postcss-scss",
  extends: "stylelint-config-standard",
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-order": [sortOrderSmacss()],
    'max-line-length': 150,
  },
};
