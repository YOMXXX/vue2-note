require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
var fs = require('fs')
var app = express()
// var mongoose = require('mongoose')
// var addItem = require('../mongodb/models/index.js')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')


// mongoose.connect('mongodb://localhost:27017/liguanchen')


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})

var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}


// mongoose.connect('mongodb://localhost:27017/liguanchen');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')));


// app.get('*', function(req, res) {
//     var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'UTF-8')
//     res.send(html);
// })
// app.post('/api/login/createItem', (req, res) => {
//     // 这里的req.body能够使用就在index.js中引入了var bodyParser = require('body-parser')
//     // let newAccount = new models.Login({
//     //     account: req.body.account,
//     //     password: req.body.password
//     // });
//     var _list = new addItem({
//         title: req.query.a,
//         content: req.query.b,
//         summary: req.query.c
//     });

//     _list.save(function(err, movie) {
//         if (err) {
//             console.log(err)
//         }
//         res.json({
//             'code': 1,
//             'msg': '录入成功'
//         })
//     })
// })
// app.post('/api/login/showLists', (req, res) => {
//     addItem.fetch(function(err, lists) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json({
//                 'code': 1,
//                 lists
//             })
//         }
//     })
// });

// app.post('/api/login/deleteItem', (req, res) => {
//     const _id = req.query.id;
//     addItem.remove(_id, function(err, list) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json({
//                 'code': 1,
//             })
//         }
//     })
// });

app.post('/api/login/yanzheng', (req, res) => {
    const back = req.query;
    console.log(req.query.zhanghao)
    if (req.query.zhanghao == '123456' && req.query.mima == '123456') {
        res.json({
            code: '1',
            msg: '验证通过，欢迎' + req.query.zhanghao
        })
    }else{
        res.json({
            code: '0',
            msg: '验证失败，请重新填写'
        })
    }
});
