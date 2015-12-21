module.exports = {
    resolve: {
        alias: {
            jquery: "../../vendor/jquery/jquery.min.js"
        }
    },
    output: {
        //path that will be considered when requiring your files
        //this is used when splitting the codes as well
        publicPath: "/assets/js/",

        //filename of the main app file
        filename: 'global.js'
    }
};
