/**
 * *서버 페이지네이션-spa의 골격 
 * 갠플 프로젝트 바닐라로 작업시 참고하면 좋을 내용
 * 코드를 보고 '구조'를 뜯어보기 
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

function htmlMaker(head ="", body="") {
  let htmlString = "";
  htmlString += `<!DOCTYPE html><html lang="en">`;
  htmlString += `<head>`;
  htmlString += `${head}`;
  htmlString += `</head>`;
  htmlString += `<body>`;
  htmlString += `${body}`;
  htmlString += `</body>`;
  htmlString += `</html>`;
  return htmlString;
}

const server = http.createServer((request, response) => {
  let getMethod = request.method;
  switch (getMethod) {
    case 'GET':
      response.writeHead(200, { 'Content-Type': 'text/html' });
      // content-type이 적용되기 전까진 단순한 문자열이다. 
      const htmlFile = htmlMaker("", "<h1>hello</h1>");
      response.write(htmlFile);
      response.end();
      break;
    default:
      response.writeHead(405, { 'Content-Type': 'text/html' });
      response.write('Method Not Allowed');
      response.end();
      break;
  }
});
server.listen(5678, (error) => {if(error) throw error});