import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const terserFilterString = '@Copyright'
const name = '@asid17/lol'
const banner = `
${terserFilterString} (c) 2024 asid17 lol
name: ${name}
license: MIT
author: asid17
repository: ...
version: 0.0.1
`

const combinedOptions = (formatList) => formatList.map(formatOutputOption => targetOptions(formatOutputOption))
const targetOptions = (targetOutputOption) => ({
    input: './src/index.ts',
    plugins: [
        typescript(),
        /**
         * How to use terser' options
         * https://github.com/terser/terser?tab=readmo-ov-file#format-options
         * 
         */
        terser({
            compress: true,
            format:{
                comments: 'some'
            }
        })
    ],
    output: Object.assign({}, targetOutputOption, {
        banner: `/*${banner}*/`,
        sourcemap: true,
    })

})

export default combinedOptions([{
    format: 'cjs',
    file: `./dist/asid17.cjs.js`,
}, {
    format: 'umd',
    name,
    file: `./dist/asid17.umd.js`,
}, {
    file: `./dist/asid17.esm.js`,
    format: 'esm',
}])