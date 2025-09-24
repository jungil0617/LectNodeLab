const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Context-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello Server</p>');
    res.end('<p>Hello Server!</p>')
})
.listen(8080, () => {
    console.log("8080포트에서 서버가 대기중입니다!");
});