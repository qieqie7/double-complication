const path = require('path');

let counterAfterEmit = 0;
let counterAfterDone = 0;
class IsDonePlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('IsDonePlugin', () => {
            console.log('👁', ++counterAfterEmit, '. complication afterEmit ', new Date());
        });
        compiler.hooks.done.tap('IsDonePlugin', () => {
            console.log('👁', ++counterAfterDone, '. complication is Done ', new Date());
        });
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    watch: true,
    plugins: [new IsDonePlugin()],
    stats: 'errors-only'
};
