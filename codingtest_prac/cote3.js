// 전리품 가죽45개()
// 가죽이 개당 얼마???
// 8시간 플레이 -> 00gold, 00cooper
// gold 00얻음

function game_money(getLeather) {
  //단위 : 쿠퍼
  let cooper = 1;
  let silver = 8 * cooper;
  let leather = 2 * silver;
  let gold = 4 * silver;

  let leatherToCooper = getLeather * leather; //720cooper
  let leatherToGold = leatherToCooper / gold; //22.5골드

  if (Number.isInteger(leatherToGold) === false) {
    let getGoldOnly = Math.floor(leatherToGold); //골드(정수) 획득
    let outOfgoldToCooper = (leatherToGold - getGoldOnly) * gold;
    // console.log(outOfgoldToCooper); //16cooper

    //출력
    A =
      '이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ' +
      getGoldOnly +
      '개 입니다.';
    B =
      'gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ' +
      outOfgoldToCooper +
      '개의 copper를 챙겼습니다.';
    C =
      '공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ' +
      getGoldOnly * 8 +
      'gold, ' +
      outOfgoldToCooper * 8 +
      "copper'를 얻었습니다";
  }

  console.log(A);
  console.log(B);
  console.log(C);
}
game_money(45);
