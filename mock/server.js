var app = require('koa')();
var router = require('koa-router')();



// 首页导航模拟数据
var homeNavData = require('./home/nav.js');
router.get('/api/homeNav', function *(next) {

    // 返回数据
    this.body = homeNavData
});

// 列表页模拟数据
var ListPageData = require('./list/list.js');
router.get('/api/list/:name/:age', function *(next) {

    // 参数
    const params = this.params
    const paramsName = params.name
    const paramsAge = params.age

    console.log('姓名:' + paramsName)
    console.log('年龄:' + paramsAge)

    // 返回数据
    this.body = ListPageData
});



// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
