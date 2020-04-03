const moduleGenerator = require("./plop-templates/prompt");
module.exports = plop => {
  // 增加一种 action
  plop.setGenerator("module", moduleGenerator);
};
