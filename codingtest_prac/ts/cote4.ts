function change_money() {

  let money = {
    '5만원권': 50000,
    '1만원권': 10000,
    '5백원동전': 500,
    '1백원동전': 100,
    '50원동전': 50,
    '10원동전': 10,
  
  };
  
    function change(firstChange:number, changeMoney:number) {
      let change = firstChange;
      if (typeof change === 'number') {
        let give_money = change - changeMoney;
        let is_positive:boolean = give_money - change >= 0;
        let positive = Math.ceil(give_money / changeMoney);
        if (is_positive === false) {
          let is_more_change = give_money - changeMoney >= 0;
          if (is_more_change === true) {
            let set = [];
            for (let i = 0; i <= positive; i++) {
              let more_change:number = give_money - changeMoney * i;
              set.push(more_change); //never형식?
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