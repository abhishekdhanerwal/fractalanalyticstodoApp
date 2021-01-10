const compression = require('compression');
const express = require('express');
const bodyparser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const mongoose = require('mongoose');
const url = 'mongodb+srv://mojaAdminZaruri:VcavTUylDkxvTdFA@cluster0.6dkwm.mongodb.net/todoApp?retryWrites=true&w=majority';

const app = express();

let configWebpack = require('../client/webpack.config.dev');
const compiler = webpack(configWebpack);

//Use body parser to parse json.
app.use(bodyparser.json({limit: '5mb'}));
app.use(bodyparser.urlencoded({extended: false}));

//Use to avoid cors issue.
app.use(compression());

const bucketRoute = require('./routes/bucket.route');
const listRoute = require('./routes/list.route');

app.use('/buckets', bucketRoute);
app.use('/list', listRoute);

app.use(express.static(path.join(__dirname, '../client/src')));

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: configWebpack.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../client/src/index.html'));
});


mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true  })
.then(result => {
    app.listen(3000, () => {
        console.log(`todoapp is listening on port 3000`);
    });
})
.catch(err => {
        console.log(err);
});