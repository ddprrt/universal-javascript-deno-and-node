# Universal JavaScript on Deno and Node.js

Requires:
- Node 18+
- Deno 1.19+


## Run on Node.js

```bash
$ npm install
$ node ./index.mjs
```

## Run on Deno

```bash
$ deno run --import-map=./import_map.json --allow-net index.mjs
```

## How does this work?

1. Node introduced global `fetch`, which follows web standards. Node also has support for ES modules. So the script works the moment you installed dependencies

2. Deno has global `fetch` since its inception. With the support of JSPM and *import maps* (see [import_map.json](./import_map.json)) it's possible to use the same dependency import, even though module resolution and dependency resolution is totally different

