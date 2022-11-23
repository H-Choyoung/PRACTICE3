//합조건 수량 제어하기
const shape_array = ["spade", "heart", "diamond", "club", "joker"];
const trump_deck =()=> {
  //공통 객체와 키값을 만드는 함수
  const deckMaker =()=> {
    let firstKeys = ['A'];
    let numKeys = [2,3,4,5,6,7,8,9,10];
    let lastKeys = ['J','Q','K'];
    let allKeys = [...firstKeys, ...numKeys, ...lastKeys];
    // console.log(allKeys);
    let objSet = {};
    allKeys.forEach((v,idx) => {
      objSet[v] = idx+1;
    });
    return objSet;
    // console.log(objSet); //객체 출력
  };
  deckMaker();
  
  // 카드에 객체를 심어 리턴하는 함수
  const objMaker =(arr)=> {
    let objSet = {};
    // let lenSet = [];
    arr.forEach((v,idx) => {
      if(v === "joker"){
        objSet[v] = { "RED" : 1, "BLACK" : 2 }; 
        // let JokerLen = Object.values(objSet[v]).length;
        // lenSet.push(JokerLen);
      } else {
        objSet[v] = deckMaker();
        // let otherCardLen = Object.values(objSet[v]).length;
        // lenSet.push(otherCardLen);
      }
    });
    // lenSet = [...new Set(lenSet)]; //중복제거
    // console.log(objSet.spade);
    return objSet;
  };
  // console.log(objMaker(shape_array));
  return objMaker(shape_array);
}
trump_deck();



/**
 * 각 모양에 대한 수량은 총 13개
 * 키의 갯수는 셀 수 있어야 함
 * 1. 객체 안의 객체가 joker빼곤 동일하니까
 * 2. 객체 안의 객체를 먼저 만들기
 * 2-1. 값이 키의 길이값과 일치하므로 키와 index활용해 객체 구성
 * 3. 카드 모양에 따라 만든 객체 심기
 * 3-1. 조커는 다른 객체이므로 조건문으로 별도 배치
 * 4. 전체 객체 리턴하는 함수로 정리
 * 5. 각 객체의 길이값 더해서 54확인
 */

/**
 * 함수를 통해 만들어지는 트럼프 덱의 자료구조는 다음과 같습니다.
{
spade : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
heart : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
diamond : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
club : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
joker : { "RED" : 1, "BLACK" : 2 } 
}
 */

/**
 * 트럼프 카드 한 벌당 다섯개의 모양(하나의 모양마다 총 13개의 카드)
 * 조커는 총 2장
 * 모양마다: A:1, 2~10, J:11, Q:12, K:13
 * 
 * 조건1. 수량과 항목 정확하게
 * 조건2. 리턴은 객체타입
 * 
 */