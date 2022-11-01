const http = require('http');

let imsi = [];
for(let key in http){
  imsi.push(key);
}
console.log(imsi);

/**
 * ? 백엔드니까 다르다? -> 그래봤자 '객체
 * 모듈화 -> import, export = 함수, 객체
 * 관점 : 데이터타입 이외에는 없다.
 * 작성법이 아니라 기반 지식이 부족한 것 
 */