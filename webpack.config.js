const path = require('path');

module.exports ={
    entry:'./src/index.js', //punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //nombre del archivo de salida 
        path: path.resolve(__dirname, 'dist'), //carpeta de salida 
    },
    module: {
        rules: [
            {
                test:/\.css$/, //regrex para identificar archivo css
                use:['style-loader','css-loader'], //loader librerias que sirven para procesar librerias css
            },
            {
                test: /\,js$/, //regrex para identificar archivos js
                exclude:/node_modules/, // Excluir la carpeta de node_modules
                use:{
                    loader: 'babel-loader', // Loader para llevar JS moderno a JS antiguo
                    options: {
                        presets:['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), //carpeta desde el cual else 
        compress: true, // Habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};
