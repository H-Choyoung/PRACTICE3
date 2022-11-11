const path = require('path');
/**
 * ? 1. 디렉토리를 사용하기 위해 CJS방식으로 경로(path)를 제어하는 모듈을 import했다.
 * muduleJS === MJS === ESM(ECMAScript Module)도 동일하게 package.json에 설정하면 사용할 수 있다.
 */

// ? 2. 함수선언인 setConfig()는 맨 아래의 코드를 확인한 뒤 돌아볼 것
function setConfig(mode = 'development', pathAndfilename, fileformat) {
  if (
    typeof mode === 'string' &&
    typeof pathAndfilename === 'string' &&
    typeof fileformat === 'string'
  ) {
    /**
     * ? 4. if(조건식)
     * 함수 호출 과정에서 원하지 않는 데이터타입이 입력되어 오작동이 일어나지 않도록 조건을 처리했다. (모든 파일은 문자열로 처리된다는 조건 활용)
     */
    function setUpFileFormat(fileformat) {
      switch (fileformat) {
        case 'javascript':
          return 'js';
          break;
        case 'typescript':
          return 'ts';
          break;
        case 'js':
          return 'js';
          break;
        case 'ts':
          return 'ts';
          break;
        default:
          return console.log('need string check fileformat');
      }
    }
    /**
     * ? 5. 매개변수 fileformat 데이터를 원하는 형태로 '가공'하는 형태를 만들기 위해
     * 내부함수격인 함수를 생성했다. 변수의 경우 지역변수에 해당하며, closure라고 부른다. (정확한 의미는 약간 다름)
     * 한번만 실행될 것이기에 내부함수로 제작
     * 원하는 경우의 수를 고려하여 if문이 아닌 switch문으로 처리. (if문이나 else if문으로 처리 가능)
     * 형태는 안티패턴이긴 하지만, switch의 가독성과 처리 방식을 점쳐볼 것
     */
    const setUpFileFormat = setUpFileFormat; //진행중
  }
}
