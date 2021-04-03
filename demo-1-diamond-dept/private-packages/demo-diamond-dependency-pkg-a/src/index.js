const pkgJson = require('../package.json')

const dependency = require('@apollotang/demo-diamond-dependency-pkg-b')
const dependency2 = require('@apollotang/demo-diamond-dependency-pkg-c')


let output = `${pkgJson.name}:${pkgJson.version} ---> ${dependency.name}:${dependency.version}`
console.log(output)

let output2 = `${pkgJson.name}:${pkgJson.version} ---> ${dependency2.name}:${dependency2.version}`
console.log(output2)

module.exports = pkgJson

