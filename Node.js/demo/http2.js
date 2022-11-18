const http = require('http');

const server = http.createServer();


server.on('request', function(req, res){
    const url = req.url;
    let content = '<h1>404 not found </h1>';
    // 根据 url 判断 设置不同内容
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>';
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>';
    }
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
});

server.listen(80, () => {
    console.log('Running at http://127.0.0.1');
})