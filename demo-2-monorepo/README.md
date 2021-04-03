```
.
├── node_modules/
│   └── @apollotang/
│       ├── demo-diamond-dependency-pkg-a -> ../../private-packages/demo-diamond-dependency-pkg-a/
│       ├── demo-diamond-dependency-pkg-b -> ../../npm-packages/demo-diamond-dependency-pkg-b/
│       ├── demo-diamond-dependency-pkg-c -> ../../npm-packages/demo-diamond-dependency-pkg-c/
│       └── demo-diamond-dependency-pkg-d -> ../../npm-packages/demo-diamond-dependency-pkg-d/
├── npm-packages/
│   ├── demo-diamond-dependency-pkg-b/
│   │   ├── node_modules/
│   │   │   └── @apollotang/
│   │   │       └── demo-diamond-dependency-pkg-d/
│   │   │           ├── src/
│   │   │           │   └── index.js
│   │   │           └── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── package.json
│   ├── demo-diamond-dependency-pkg-c/
│   │   ├── src/
│   │   │   └── index.js
│   │   └── package.json
│   └── demo-diamond-dependency-pkg-d/
│       ├── src/
│       │   └── index.js
│       └── package.json
├── private-packages/
│   └── demo-diamond-dependency-pkg-a/
│       ├── src/
│       │   └── index.js
│       └── package.json
├── lerna.json
├── package.json
└── yarn.lock

```
13 directories, 11 files
