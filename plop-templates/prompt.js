// const {resolve} = require('path');

const notEmpty = name => {
  return v => {
    if (!v || v.trim === "") {
      return `${name} 必须填写`;
    }
    return true;
  };
};

module.exports = {
  description: "生成模块模板...",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入模块名称",
      validate: notEmpty("模块名称")
    }
  ],
  actions: data => {
    const { name } = data;
    const actions = [
      {
        type: "add",
        path: `src/modules/${name}/router/index.js`,
        templateFile: "plop-templates/router.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: `src/modules/${name}/views/index.vue`,
        templateFile: "plop-templates/vue.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: `src/modules/${name}/components/index.vue`,
        templateFile: "plop-templates/vue.hbs",
        skipIfExists: true
      }
    ];
    return actions;
  }
};
