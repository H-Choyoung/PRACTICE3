interface sortResult {
  one : number;
  two : number;
  three : number;
  four : number;
  five : number;
}
const inputData2 = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]; 
let step2 = 0;
function sortArray2(array:number[]){
  array.forEach((n:number, i:number)=> {
    let val = array[i]; //배열의 값
    let j:number;
    for(j= i-1; j>=0 && array[j]>val; j--){
      array[j+1] = array[j];
      step2++;
      // console.log(step) //26
    }
    array[j+1]= val;
  })
  console.log('총'+step2+'번 순서 변경')
  return array;
}
let arrResult2 = sortArray2(inputData2)

const result2 : sortResult = {
  one : arrResult2[0],
  two : arrResult2[1],
  three : arrResult2[2],
  four : arrResult2[3],
  five : arrResult2[3]
}
console.log(result2)