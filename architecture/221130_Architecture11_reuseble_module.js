// Architecture -11 | 재사용성 높은 모듈을 만들어 계속 끓여먹기
/**
 * ? 컴퓨터 일반의 관점에서
 * * JAVA : 멀티스레딩(머리가 여럿) + 블로킹(동기)방식
 * - 하나의 cpu를 최대한 끌어모으는 방식보다 여러개를 잘 관리(클러스터링)하는 것이 초점이다. 
 * - 장점 : 머리 하나가 고장나도 작동하기 때문에 매우 안정적
 * - 단점 : 멀티코어 하드웨어를 사용하는 것이 권장됨(비용이 많이 듦)
 * * Node.js : 싱글스레딩(머리 하나) + 논블로킹(비동기) 방식
 * - 하나의 cpu를 극한까지 써먹는다(핸들링을 잘 해서 하드웨어의 한계를 넘어서겠따는 기조)
 * - 장점 : 멀티스레드 방식에 비해 하드웨어 성능을 타지 않고, 입출력 성능이 아주 좋음
 * - 단점 : 머리 하나가 마비되면 서비스 전체가 마비됨
 * * python : 멀티스레딩(일반적) + 동기(대부분)
 * - 교육용 언어로 시작했기 때문에 대부분의 코드는 동기처리이며, 웹 프레임워크 특성에 따라 성격과 특성이 조금씩 달라짐 
 */

/**
 * @params {string} path 0번째 매개변수(arguments[0])
 * @params {function} callbavk 1번째 매개변수(arguments[0])
 * @return {object} 호출되는 즉시 객체타입으로 반환
 * 
 * @callbackparams[0] {object} callback 함수는 인자로 obj를 받도록 설계되어 있음
 * @description 해당 모듈(함수)은 파일 목록을 읽어내 값이 문자열로 이루어진 객체형태로 사용하기 위해 만들어짐 
 */
module.exports = function(pathStr, callback){
  const fs = require('fs');
  const path = require('path'); //선택사항
  fs.readdir(pathStr, 'utf8', (err, fileName) => {
    if(err) throw err;
    // for return : result
    const result = {}
    const data = [];
    fileName.map(val => {
      data.push(val.split('.')[0]); //파일명만 추출한 뒤 문자열로 뽑음?
    });
    data.forEach(val => {
      result[val] = val; //객체형식으로 만듦
    });
    console.log("data: ", data);
    console.log("result :", result);
    callback(result);
    return result;
  });
}
