// 거스름돈 계산하기
class Money {
  constructor(manwon5, manwon1, bak5, bak1, sip5, sip1) {
    (this.manwon5 = manwon5),
      (this.manwon1 = manwon1),
      (this.bak5 = bak5),
      (this.bak1 = bak1),
      (this.sip5 = sip5),
      (this.sip1 = sip1)
  }
}

function change_money() {
  let moneys = [50000,10000,5000,1000,500,100,50,10]
  let is_moneys = {
    50000: true,
    10000: true,
    5000: false,
    1000: false,
    500: true,
    100: true,
    10: true,
    50: true,
  };
  
  let is_change = Object.values(moneys);
  let money = Object.keys(moneys);
  let test = Object.entries(moneys);

  for(const keys in is_moneys){
    let vals = is_moneys[keys]
    if(vals === true){
      console.log(typeof keys)
    }
  }
  





  // test.filter(item => {
  //   if(item[1] === true){
  //     console.log(item[0])
  //     let changeAll = 65200;
  //     let changeMoneys = item[0]
  //     console.log(changeAll-changeMoneys);
  //   } 
  // })
  
  // for (const keys in moneys) {
  //   let vals = moneys[keys];
  //   if (vals === true) {
  //     let change = 65200;
  //     let test = change-keys
  //     // console.log(test)
  //   }
  // }

}


change_money()
// let obj = new Money(1,2,3,4,5,6);
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
