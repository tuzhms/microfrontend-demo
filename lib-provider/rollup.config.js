const commonjs = require("@rollup/plugin-commonjs")
const {nodeResolve} = require("@rollup/plugin-node-resolve")
const injectProcessEnv = require("rollup-plugin-inject-process-env")

const map = {
    react: "node_modules/react/cjs/react.production.min.js",
    "react/jsx-runtime": "node_modules/react/cjs/react-jsx-runtime.production.min.js"
}

const configTemplate = (outputName, path) => ({
    input: path,
    output: {
        file: `dist/${outputName}.js`,
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        injectProcessEnv({
            NODE_ENV: 'production'
        })
    ]
})

const nameTransform = (fileName) => fileName.replace("@", "").replace("/", "-")

const mapToConfig = () => {
    let array = []
    for (let name in map) {
        array.push(configTemplate(nameTransform(name), map[name]))
    }
    return array
}

module.exports = mapToConfig()