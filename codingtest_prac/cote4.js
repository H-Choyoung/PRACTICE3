// 거스름돈 계산하기
class Money {
  constructor(manwon5, manwon1, bak5, bak1, sip5, sip1) {
    (this.manwon5 = manwon5),
      (this.manwon1 = manwon1),
      (this.bak5 = bak5),
      (this.bak1 = bak1),
      (this.sip5 = sip5),
      (this.sip1 = sip1);
  }
}

function change_money() {

let money = {
  '5만원권': 50000,
  '1만원권': 10000,
  '5백원동전': 500,
  '1백원동전': 100,
  '50원동전': 50,
  '10원동전': 10,

};

  function change(firstChange, changeMoney) {
    let change = firstChange;
    if (typeof change === 'number') {
      let give_money = change - changeMoney;
      let is_positive = give_money - change >= 0;
      let positive = Math.ceil(give_money / changeMoney);
      if (is_positive === false) {
        let is_more_change = give_money - changeMoney >= 0;
        if (is_more_change === true) {
          let set = [];
          for (let i = 0; i <= positive; i++) {
            let more_change = give_money - changeMoney * i;
            set.push(more_change);
          }
          // console.log(set);
          console.log(changeMoney + '원' + positive + '개');
          return set[positive - 1];
        } else {
          console.log(changeMoney + '원' + positive + '개');
          return give_money;
          // return positive;
        }
      }
    }
  }
  let result1 = change(65200, money['5만원권']); //15200
  let result2 = change(result1, money['1만원권']); //5200
  let result3 = change(result2, money['5백원동전']); //4700
  let result4 = change(result3, money['1백원동전']); //100
  let result5 = change(result4, money['50원동전']);
  let result6 = change(result5, money['10원동전']);
}
change_money()
// let obj = new Money(result1,result2,result3,result4,result5,result6);
// console.log(obj)


// 의사코드????
/**
 * 1. 소지금 100,000원 - 지불금액 34,830원 = 거스름돈 65200원
 * 2. 조건 : 65200원에서 적어도 모든 화폐를 하나 이상 사용해서 지불하기
 * 2-1. 오만원권-1, 일만원권-1, 오백원동전-n, 일백원동전-n ...
 * 3. 우선순위 : 오만->일만->오백->일백->오십->일십
 * 4. 65200-5만을 제외한 거스름돈이 음수일 때
 * 5. 그 잔금에서 -1만을 제외한 거스름돈
 * 6. 잔금이 0이 될 때까지 반복
 *  */
