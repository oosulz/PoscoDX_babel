const babel = require("@babel/core");

const source = "const fn = () => {}";
const result = babel.transformSync(source, {});

console.log(result);
