// 빙고게임 만들기
const lineOne1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];


const bingo =()=>{
  
}

function randomChangeNum(arr){
  for(let i in arr){
    let randomNum = Math.floor(Math.random() * arr.length); //랜덤숫자 추출
    // console.log(randomNum);
    arr.splice(randomNum, 1, 1);
  }
  return [...arr];
  }
  console.log(randomChangeNum(lineOne1));

  let findArr = lineOne1;
  let init = [];
  let findEl = 1;
  let idx = findArr.indexOf(findEl);
  while (idx != -1){
    init.push(idx);
    idx = findArr.indexOf(findEl, idx+1);
  }
  // console.log(init);




/**
 * 빙고처럼 패턴이 맞으면 원소가 사라지고 길이값이 줄어든다
 * 조건1. 배열n개는 모두 length=10
 * 조건2. 같은 인덱스 값이 1이 되면 득점
 * 조건3. 0과 1만 있음
 * 조건4. 득점 : 원소 '삭제', 1씩 밀리고 길이값 1 줄어듦
 * 조건5. 동작방식은 자유
 * 조건6. 길이값이 0이 되면 '승리' 문구 출력
 */

/**
 * 1. 배열에 랜덤으로 1을 삽입하는 함수 제작(초기값 : 모두 0)
 * 2. 모든 배열에 적용되는지 테스트 
 * 3. 배열이 어느 위치에 1을 포함하고 있는지 확인
 */