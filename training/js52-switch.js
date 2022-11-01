/**
 * ? javascript-52 | 라우터 만들기 좋은 조건제어문 switch문
 * 다양한 경우의 수를 체계적으로 관리하기에 적절
 * if문과는 어조, 뉘앙스가 다르다
 * * writeHead(), statusCode, 200 응답헤더, 404 응답헤더와 같이 변할 여지가 없는 규약, 즉 프로토콜에 제격
 */

const fruits = ['사과', '포도', '딸기', '귤'];

function virtualRouter(string){
  switch(string) {
    case '사과':
      return {
        statusCode : 200,
        writeName : '사과',
        endName : 'red'
      }
    break;
    case '포도':
      return {
        statusCode : 200, 
        writeName : '포도',
        endName : 'puple'
      }
    break;
    case '딸기':
      return {
        statusCode : 200, 
        writeName : '딸기',
        endName : 'red'
      }
    break;
    case '귤':
      return {
        statusCode : 200, 
        writeName : '귤',
        endName : 'orange'
      }
    break;
    default:
      return {
        statusCode : 404, 
        writeName : '두리안',
        endName : 'green'
      }
    break;
  }
}

fruits.forEach((urlEl) => {
  virtualRouter(urlEl);
})