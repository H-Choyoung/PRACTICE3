// CJS방식의 configuration(정의)도 작성 규칙만 맞춘다면 문제없이 작동한다.
const path = require('path'); //해당 방식을 사용하려면 확장자를 cjs로 맞춰줄 것
// console.dir(path);

// ? node.js 내장모듈인 path 객체는 어떤 함수를 지원하는지 살펴보기

module.exports = {
  mode : "production",
  // ? webpack.config.js가 지원하는 mode의 값은 3개이다. 무엇이 있는지 찾아보기
  /**
   * @entry : 경로 -> 번들링할 개발파일 / 여러가지 의존관계가 얽힌 통상적인 개발 파일 중 '실행'하고자 하는 파일의 경로를 설정한다.
   * @output : 번들러가 번들링을 진행시켜 나온 결과물의 파일 이름을 간단하게 정했다.(다양한 설정 존재 )
   */
  entry : "./src/index.js",
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "bundle.js"
  }
}