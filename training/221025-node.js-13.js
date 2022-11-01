/**
 * node.js-13 | 바닐라로 서버를 만들면, 동작원리를 '읽는 것'이 가능하다.
 * 반복적으로 작성한 것은 '반복적으로 필요한 동작'이기 때문
 * 프로토콜을 통해 통신을 할 때 엄격한 규칙을 거스를 방법은 없다.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
  const main = fs.readFileSync('../public/static/index.html', (err) => {
    if(err) throw err;
  });

  if(req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(main);

  } else if(req.method === 'POST') {
    let body = '';

    req.on('data', (data) => {
      body += data;
      data = data.toSting('utf8');
      console.log(data, 'this is first event');
    });

    req.on('end', () => {
      console.log(body, 'this is last event');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(main); //'종료'에 해당하는 일을 공통으로 한다
    });
  }
});
server.listen(5588, () => {
  console.log('server running...');
})
