var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var addItem = require('../mongodb/models/index.js');

mongoose.connect('mongodb://localhost:27017/liguanchen');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')));


app.get('*', function(req, res) {
    var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'UTF-8')
    res.send(html);
})
app.post('/api/login/createItem', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了var bodyParser = require('body-parser')
    // let newAccount = new models.Login({
    //     account: req.body.account,
    //     password: req.body.password
    // });
    var _list = new addItem({
        title: req.query.a,
        content: req.query.b,
        summary: req.query.c
    });

    _list.save(function(err, movie) {
        if (err) {
            console.log(err);
        }
        res.json({
            'code': 1,
            'msg': '录入成功1232s'
        })
    })
})
app.get('/api/login/showLists', (req, res) => {
    addItem.fetch(function (err, lists) {
        if (err) {
            console.log(err)
        } else {
            res.json({
                lists
            })
        }
    })
});
app.listen(8088, () => {
    console.log('connecting!');
});
