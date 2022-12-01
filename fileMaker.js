const fs = require("fs");

const fileMaker =(fileName, tagName="", content)=> {
  // 디렉토리가 존재하는지 확인
  if(fs.existsSync("./dir")){
    // 디렉토리 내 파일이 존재하는지 확인
    if(fs.existsSync(`./dir/${fileName}`)){
      console.log('already file is exist');
    } 
    else {
      // 같은 이름의 파일이 존재하지 않는다면 만듦
      // 확장자가 json인 경우
      if(fileName.includes('json')){
        let toJson = JSON.stringify(content);
        fs.writeFileSync(`./dir/${fileName}`, toJson, (err) => {
          if(err) throw err;});
      } else if(fileName.includes('txt')) {
        // 확장자가 txt인 경우
        let tag = `<${tagName}>`+ content +`</${tagName}>`
        fs.writeFile(`./dir/${fileName}`,tag, (err) => {
          if(err) throw err;});
      } else {
        console.log('확장자 : txt or json')
      }
    }
  }
  else {
    //디렉토리가 존재하지 않는다면 만듦
    console.log('plz make directory');
    fs.mkdirSync("./dir");
    }
  }
// fileMaker('test.json','','is test');

module.exports = fileMaker;