const webpack = require('webpack');
const webpackConfig = require('../client/webpack.config.prod');


process.env.NODE_env = 'production';



webpack(webpackConfig).run((err, stats) => {
    if(err) {
        console.log(err);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: ');
        jsonStats.warnings.map(warning => console.log(warning));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we  got this far, the build succeeded.
    console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!');
    return 0;
});