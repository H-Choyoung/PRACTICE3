const fs = require("fs");

const strAssemble =()=> {
  //head
  const head = fs.readFileSync('head.txt', 'utf-8', data => {return data});
  //body
  let body = fs.readFileSync('body.txt', 'utf-8', data => {return data});
  const main = fs.readFileSync('./dir/main.txt', 'utf-8', data => {return data});
  const header = fs.readFileSync('./dir/header.txt', 'utf-8', data => {return data});
  //body > main > header
  /* 파일을 부모자식 형식으로 구성하고 싶을 때 사용할 함수  */
  const containerMaker =(container, child)=> {
    if(body === ""){
      // 닫는 태그 기준으로 문자열 해체
      if(container.includes('</')){
        // 부모가 될 태그 기준으로 닫는 태그 '/'의 위치를 추출
        let closeTagIdx = container.indexOf('/')-1;
        // 부모 태그 문자열 음절로 해체
        let strs = container.split("");
        // 추출한 위치 기준으로 자식태그 삽입
        strs.splice(closeTagIdx, 0, child);
        // 해체한 문자열을 합쳐서 반환
        let result = strs.join("");
        // console.log(result);
        return result;
      };
    }
  }
  //main > header 구조라면
  body = containerMaker(main,header);
  //main / header 구조라면
  // body = main + header;

  //footer
  const footer = fs.readFileSync('./dir/footer.txt', 'utf-8', data => {return data});
  //join all tag
  const all = head + body + footer;
  // console.log(all);
  return all;
}

// export default strAssemble;
module.exports = strAssemble;
