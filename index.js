const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const query = require("querystring");
/* 작성 모듈 import */
const strAssemble = require("./dom-assemble.js");
const fileMaker = require("./fileMaker.js");
const getList = require("./getListFunc.js");

const server = http.createServer((req, res) => {
  let getMethod = req.method;
  const getPathname = url.parse(req.url).pathname;
  // const getQuery = url.parse(req.url).query;
  // console.log(getPathname);

  switch (getMethod) {
    case 'GET':
        try {
          if(getPathname == '/'){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(strAssemble());
          } 
          else if(getPathname == '/post_test') {
            let form = fs.readFileSync("./dir/post_test.html");
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8;'});
            res.end(form);
          }
          else if(getPathname == '/a_test') {
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8;'});
            res.write(getList("./dir"));
            res.end();
          }
        }
        catch(err) {
          console.log(err);
        }
        break;
    case 'POST':
        try{
        if(getPathname == '/post_test2'){
          let postData = '';
          req.on('data', function(data){
            postData = postData + data;
            // console.log(postData); //name=""
          });
          req.on('end', function() {
            let parsedQr = query.parse(postData);
            // console.log(parsedQr.title);
            const date = new Date();
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8;'});
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
              <p>title : ${parsedQr.title}</p>
              <p>content : ${parsedQr.content}</p>
              <p>data : ${date}</p>
            </body>
            </html>`);
            //json파일로 저장하기
            res.end(fileMaker('save_json2.json', '', parsedQr));
        });
      }
    } catch(err) {
        console.log(err);}
      break;
    default:
      res.writeHead(405, {'Content-Type':'text/html'});
      res.write('Not found');
      res.end();
      break;
  }
});
server.listen(5580, console.log('server is running...'), (err) => {if(err) throw err});