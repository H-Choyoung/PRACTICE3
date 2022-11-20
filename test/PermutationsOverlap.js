/**
 * ?중복순열
 * 서로 다른 n개의 원소를 가지고 중복(숫자)을 허용하여 r개의 원소를 선택 혹은 나열
 */

let test = [1,2,3];

const getPermutationOverlap =(arr, num)=> {
  const results = [];
  if(num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, idx, origin)=>{
    //1. 기준값이 있기 때문에 선택하려는 개수-1
    const permutation = getPermutationOverlap(origin, num-1);
    //2. 기준값에 순열을 붙인다.
    const attached = permutation.map(v => [fixed, ...v]);

    results.push(...attached);
  });
  return results;
}
console.log(getPermutationOverlap(test, 2));