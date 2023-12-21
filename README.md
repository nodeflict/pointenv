# pointenv ![npm version](npm-v1.0.0-blue.svg)

## Install
```bash
# Install locally (recomended)
npm install pointenv --save
```
Or installing with yarn? `yarn add dotenv`

Create a `.env` file in the root of your project:

```dosini
NAME=Pointenv
VERSION=1.2.0
LICENSE=MIT
AUTHOR=Shahzada Modassir
DEBUG=true
GIT_REPOGITORY="git+https://github.com/nodeflict/pointenv.git"
```
As early as possible in your application, import and configure dotenv:
```js
require("pointenv").load();
console.log(process.env);
```

That's it. `process.env` now has the keys and values you defined in your `.env` file:
```js
require("pointenv").load();
console.log(process.env.GIT_REPOGITORY);
```

## License
[MIT](https://github.com/nodeflict/pointenv/blob/main/LICENSE)

## Author
Shahzada Modassir