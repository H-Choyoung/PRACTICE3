// 정렬 알고리즘
// 1. 인자로 배열을 받는다
// 2. 리턴타입 : 객체
// 3. 다른 무작위 배열에서도 쓸 수 있게... 

class SortArray{
  constructor(one, two, three, four, five){
    this.one = one,
    this.two = two,
    this.three = three,
    this.four = four,
    this.five = five
  }
}
const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]; 
let step = 0;
function sortArray(array){
  for(const i in array){
    // console.log(i); //0~9
    let val = array[i]; //배열의 값
    let j;
    for(j=i-1; j>=0 && array[j]>val; j--){
      array[j+1] = array[j];
      step++;
      // console.log(step) //26
    }
    array[j+1]= val;
  }
  console.log('총'+step+'번 순서 변경')
  return array;
}
let arrResult = sortArray(inputData)
// console.log(sortArray(inputData))

let result = new SortArray(arrResult[0], arrResult[1], arrResult[2], arrResult[3], arrResult[4]);
console.log(result);

/**
 * 1. 배열에서 반복문 돌리기
 * 2. 앞과 뒤를 비교하기?
 * 3. 더 작은 수를 앞으로
 * 4. 쌓아가기
 * 5. 결과값 받아서 class로 인스턴스 생성
 */


// inputData.forEach(function(item, index){
//   console.log(index+1 +"번째:"+ item)
// })

// let maxNum = Math.max(...inputData);
// let minNum = Math.min(...inputData);
// // console.log(maxNum)
// if(inputData.includes(minNum)){
//   inputData.splice(minNum);
//   console.log(inputData)
// }
// inputData.splice(0, 0, minNum);
// console.log(inputData)
