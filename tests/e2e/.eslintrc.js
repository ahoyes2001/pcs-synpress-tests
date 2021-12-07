/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const path = require("path");
const synpressPath = path.join(
  process.cwd(),
  "/node_modules/@synthetixio/synpress"
  // eslint-disable-next-line prettier/prettier
);

module.exports = {
  extends: `${synpressPath}/.eslintrc.js`,
  rules: { "prettier/prettier": ["error", { endOfLine: "auto", semi: false }] },
};
