// var express = require('express');
// var path = require('path');
// var app = express();
// var indexRouter=require('./routers/index')
// app.use('/dist', express.static(path.resolve(__dirname,'../dist')));
// // app.get('/',function (req,res) {
// //     res.sendFile(path.resolve(__dirname, '../index.html'));
// // });
// app.use('/src/jslib', express.static(path.resolve(__dirname,'../src/jslib')));
// app.use('/src/img', express.static(path.resolve(__dirname,'../src/img')));
// app.use('/',indexRouter)
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.send('error');
// });

// process.on('uncaughtException', function (err) {
//     //打印出错误
//     console.log(err);
//     //打印出错误的调用栈方便调试
//     console.log(err.stack)
// });
// module.exports = app;
