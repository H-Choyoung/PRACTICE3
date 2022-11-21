// 텍스트의 경향 분석하기
/**
 * 1. 더미텍스트에서 어떤 알파벳이 얼마나 사용되었는지 찾기
 * -> 리턴 : 객체타입
 * -> 다른 나라의 언어여도 동작해야함
 * 2. 1번이 되었다면 : 조건2,3
 */

// console.log(alphabetSplit);

function text_listup(){

  const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "
  
  const alphabet = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
  let alphabetSplit = alphabet.split(',');

  //조건1. 어떤 알파벳을 몇 개를 사용했는지  
  function findStr(inputStr){
    let lowerCase = inputStr.toLowerCase();
    let set = {};
    alphabetSplit.forEach(v => {
      let lens = lowerCase.split(v).length-1;
      set[v] = lens;
    });
    return set; //
  } 
  // console.log(findStr(fromInput));

  // 조건2. 적게 쓴 음절(많이 쓴 음절갯수-적게 쓴 음절 갯수) 무작위로 문자열 사이 추가
  let vals = Object.values(findStr(fromInput));
  let maxVal = Math.max(...vals);
  let minVal = Math.min(...vals);
  let inputMinLen = maxVal-minVal;

  // 값으로 키를 찾는 함수
  function getKeyByVal(obj, val){
    return Object.keys(obj).find(key => obj[key] === val);
  }
  let key = getKeyByVal(findStr(fromInput), minVal); //적게 쓴 음절 g
  
  // 문자열에 랜덤으로 문자를 삽입하는 함수
  function inputRandomStr(strings){
    let splitStrArr = strings.split(''); //음절 끊어서 배열형태로 반환
    let findStrLens = strings.split('').length; //614개의 음절 
    for(let i=1; i<=inputMinLen; i++){
      let randomNum = Math.floor(Math.random()*findStrLens); //614개 중 랜덤숫자 추출
      splitStrArr.splice(randomNum, 0, key);
      // console.log(randomNum);
    }
    // console.log(splitStrArr); //515 -> 552
    return splitStrArr;
  }
  let result = inputRandomStr(fromInput).join('');
  // console.log(result); //결과 확인
  // 조건3. 
  let offSpace = result.replace(/\s/g, ""); //문자열 공백 없애기

  return findStr(fromInput); //조건1 리턴(객체) 
}
text_listup();
// console.log(text_listup());



/**
 * 조건1
 * 1. 어떤 알파벳을 포함하고 있는지 찾기 : include or split 
 * 2. 알파벳을 몇 개나 포함하고 있는지 찾기 : ??.length
 * 3. 알파벳 모두에 적용하기 
 * 4. 대소문자를 구분한다면 모두 대문자 혹은 소문자로 변경
 * 
 * 조건2
 * 1. 배열의 최대값과 최소값 구하기
 * 2. 값에 해당하는 키 찾기 
 * 3. 사용 문자열 음절별로 끊기
 * 4. 문자열의 길이만큼 랜덤숫자 추출
 * 5. 최대값-최소값만큼 랜덤 숫자로 반복
 * 6. 문자열 합쳐서 반환
 * 
 * 조건3
 * 1. 띄어쓰기 추출
 * 2. 띄어쓰기 모두 없애기
 * 3. 음절 5개 기준으로 띄어쓰기 삽입 
 */