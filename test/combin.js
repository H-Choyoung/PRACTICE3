/**
 * ?조합
 * 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것
 * nCr로 나타냄
 */

let test = [1,2,3];

const getCombi =(arr, num)=> {
  const result = [];
  // 1은 바로 반환
  if (num === 1) return arr.map(v => [v]);
  arr.forEach((fixed, idx, origin) => {
    //1. 조합에서 값 순서와 상관없이 중복이 되면 안되기에 현재값 이후의 배열들만 추출한다.
    const rest = origin.slice(idx+1);
    // console.log(rest) //[2,3][3],[]

    //2. 나머지 배열을 기준으로 다시 조합 시작
    //2-1.기준값(fixed)이 있기에 선택하려는 개수에서 -1
    const combinations = getCombi(rest, num-1);
    // console.log(combinations); //[[2],[3]],[[3]],[]

    //3. 기준값(fixed)에 돌아온 조합(combications)을 붙인다
    const attached = combinations.map(v => [fixed, ...v]);
    // console.log(attached);//[[1,2]],[[1,3]],[[2,3]],[]
    //4. 붙인 값을 결과 값에 넣어준다.
    result.push(...attached);
  });
  return result;
}

console.log(getCombi(test, 2));