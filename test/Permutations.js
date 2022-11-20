/**
 * ?순열
 * 서로 다른 n개의 원소를 가지고 중복 없이 순서에 상관있게 r개의 원소를 선택 혹은 나열 
 * nPr
 */

let test = [1,2,3]
const getPermutation =(arr, num)=> {
  const results = [];
  // 1은 의미 없기 때문에 바로 반환
  if(num === 1) return arr.map(v => [v]);
  arr.forEach((fixed, idx, origin) => {
    // console.log(origin); //[1,2,3]
    // console.log(fixed); //1 2 3

    //1. 순열은 순서만 바뀌면 중복이 아니기에 기준값을 제외한 나머지 배열을 넣어준다. 
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    // console.log(rest) //[2,3][1,3][1,2]

    //2. 나머지 배열을 기준으로 다시 순열을 구한다
    //기준값(fixed)이 있기 때문에 선택하려는 개수에서 -1
    const permutations = getPermutation(rest,num-1);
    // 기준값(fixed)에 순열(permutation)을 붙이기
    const attached = permutations.map(v => [fixed, ...v]);

    results.push(...attached)
  });
  return results;
}
console.log(getPermutation(test, 2));