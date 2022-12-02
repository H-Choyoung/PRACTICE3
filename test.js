const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const { encode } = require("punycode");
/* 작성 모듈 import */
const fileMaker = require("./fileMaker.js");


class DomMaker {
  constructor(head, inBodyContent){
    this.head = head;
    // this.body = body;
    this.body = {
      content: inBodyContent
    };
  }
}

// 파일명과 내용을 객체로 반환하게..
const getFileNameAndCon =()=> {
  // 폴더 안의 파일명 추출(배열)
  const dirFileNames = fs.readdirSync("./dir", "utf8", (err, dirList) => {
    if(err) throw err;
  });

  // 파일명 추출(문자열)
  const obj = {};
  dirFileNames.map(val => {
    let nameStrs = val;
    let onlyNameStrs = val.split(".")[0];
    // console.log(onlyNameStrs);

    // 파일 내용 불러오기
    const fileConts = fs.readFileSync(`./dir/${nameStrs}`, "utf8", (err) => { if(err) throw err;});
    // console.log(fileConts);

    // 파일명과 내용 합치기(객체)
    obj[onlyNameStrs] = fileConts;
  });
  return obj;
  // console.log(obj);
}
let resultObj = getFileNameAndCon();

console.log(Object.keys(resultObj));

// const domMaker = new DomMaker('test', )

function attachFiles(fileName, includeStr){
  const objSet = {};
  return new Promise((resolve, reject) => {
    if(fileName.includes(includeStr)){
      resolve(objSet[fileName]);
    }
    // else reject(new Error())
  });
}
