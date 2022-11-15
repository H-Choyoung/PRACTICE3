// function moneyUnit(money){
//   if(typeof money === "number"){
//     let unit = 
//   }
// }
function game_money2(getLeather) {
    //단위 : 쿠퍼
    var cooper = 1;
    var silver = 8 * cooper;
    var leather = 2 * silver;
    var gold = 4 * silver;
    var leatherToCooper = getLeather * leather * 2; //1440cooper
    var leatherToGold = leatherToCooper / gold; //45골드
    var outGoldCooper = leatherToCooper - leatherToGold * 32;
    //출력
    var A = '이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ' +
        leatherToGold +
        '개 입니다.';
    var B = 'gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ' +
        outGoldCooper +
        '개의 copper를 챙겼습니다.';
    var C = '공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ' +
        leatherToGold * 8 +
        'gold, ' +
        outGoldCooper * 8 +
        "copper'를 얻었습니다";
    console.log(A);
    console.log(B);
    console.log(C);
}
game_money(45);
