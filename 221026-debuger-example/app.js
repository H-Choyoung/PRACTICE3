const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

  const test = fs.readFileSync('./index.html', (err, data) => {if (err) throw err;
    // console.log(data);
  });
  const css = fs.readFileSync('./style.css', (err, data) => {if (err) throw err;
    // console.log(data);
  });
  const js = fs.readFileSync('./colorChange.js', (err, data) => {if (err) throw err;
    // console.log(data);
  });

  if(req.method === 'GET'){
    if(req.url === '/'){
      // console.log('커피원해')
      
      res.writeHead(200, {'Content-Type':'text/html'});
      //'이걸 html로 읽을거야'
      res.write(test); 
      res.end();

    } else if(req.url === '/style.css'){

      res.writeHead(200, {'Content-Type':'text/css'});
      res.write(css); 
      res.end();

    } else if(req.url === '/colorChange.js'){

      res.writeHead(200, {'Content-Type':'text/javascript '});
      res.write(js); 
      res.end();
    }
    console.log(req.url);
  }
  // http 모듈의 createServer() 메서드 콜백함수 두번째 파라미터 response
  else if (req.method === 'POST') {
    let body = "";

    req.on('data', (data) => {
      body += data;
      console.log(data, "this is first event"); 
      const test = new URLSearchParams(body);
      console.log(test);
      const timeData = new Date();
      console.log(timeData);
      // new Data() 인스턴스를 활용한 날짜 데이터 get
      const stemp = timeData.getFullYear() + "" + "0" + (timeData.getMonth() + 1) + timeData.getDate() + "-" + timeData.getMinutes();
      for(const[key, value] of test) {
        console.log(key, "그리고", value);
        fs.writeFile(`../save/${stemp}-${key}.txt`, value, (err) => {
          if (err) throw err;
        });
      }
    });
    req.on('end', () => {
      console.log(body, "this is last event");
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(main);
    });
  }
});
server.listen(6584, (err) => {
  console.log('server listening...')
  if(err) throw err;
})