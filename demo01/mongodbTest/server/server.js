/**
 * express 使用 body-parser 支持post参数
 * cookie-parser 存储登录信息 cookie
 */
const express = require('express');
const mongoose = require('mongoose');
// link 
const DB_URL = 'mongodb://localhost:27017/mongoDB';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('mongo connect success');
}); 

// mongo 操作
// String, Number等数据结构
// create, remove, update 增删改
// find 和 findOne 查询数据
const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}));

// 新增
// User.create({
//     user: 'chengx1',
//     age: 22
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

// 删除
// User.remove({
//     age: 20
// }, function(err, doc) {
//     console.log(doc);
// });

// 更新
// User.update(
//     {
//         'user': 'chengx1',
//     },
//     {
//         '$set': {age: 23}
//     },
//     function(err, doc) {
//         console.log(doc);
//     }
// )

const app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

app.get('/data', function(req, res) {
    User.findOne({
        user: "ch"
    }, function(err, doc) {
        res.json(doc);
    })
    // res.json({
    //     name: "chengx lalala",
    //     type: "json"
    // });
})

// app.get('/delete', function() {

// }) 

app.listen(9000, function() {
    console.log("Node app start at 9000");
});