require("./dist/pointenv").load(".env.example");

// Usage
console.log(process.env.VERSION);
console.log(process.env.NAME);
console.log(process.env.GIT_REPOGITORY);