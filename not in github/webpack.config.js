const path = require('path')



module.exports = {
    mode: 'development',
    entry: {
       script1: './src/exer.js',
       script2: './src/logon.js',
       script3: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}

