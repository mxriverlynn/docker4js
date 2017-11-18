const chalk = require("chalk");
const helloFrom = require("./hello");

const result = helloFrom("a required script in Docker");
console.log(chalk.green(result));
