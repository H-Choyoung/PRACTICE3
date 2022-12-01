// const getRes =(res, writeCon, endCon)=> {
//   res.writeHead(200, {'Content-Type':'text/html'});
//   res.write(writeCon);
//   res.end(endCon);
// }

// 폴더 안의 파일들을 li태그에 넣어서 반환해주는 함수..
const getList =(dirPath)=> {
    const fs = require("fs");
    let set = [];
    const dirs = fs.readdirSync(dirPath, "utf8", (err, dirList) => {
      // console.log(dirList);
      if(err) throw err;
    });
    dirs.map((val,idx) => {
      let list = `<li><a href="/?id=${val}">${val}</a></li>`;
      set.push(list);
    });
    set.unshift("<ul>");
    set.push("</ul>");
    return set.join('');
} 
module.exports = getList;
// console.log(getList("./dir"));
