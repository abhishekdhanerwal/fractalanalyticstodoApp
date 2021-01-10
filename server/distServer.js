const compression = require('compression');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const url = 'mongodb+srv://mojaAdminZaruri:VcavTUylDkxvTdFA@cluster0.6dkwm.mongodb.net/todoApp?retryWrites=true&w=majority';

const app = express();

//Use body parser to parse json.
app.use(bodyparser.json({limit: '5mb'}));
app.use(bodyparser.urlencoded({extended: false}));
//Use to avoid cors issue.
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

const bucketRoute = require('./routes/bucket.route');
const listRoute = require('./routes/list.route');

app.use('/buckets', bucketRoute);
app.use('/list', listRoute);

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../client/dist/index.html'));
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