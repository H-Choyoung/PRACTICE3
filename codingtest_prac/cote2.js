function score_analysis(allScoreNum, getPointThree) {
  let getThree = 3 * getPointThree;
  let getTwo = 2;
  let free = 1;
  if (
    Number.isInteger(getThree) === true &&
    Number.isInteger(getTwo) === true &&
    Number.isInteger(free) === true
  ) {
    let allScore = allScoreNum;
    let twoAndOneScore = allScore - getThree;
    let A = (twoAndOneScore * 0.5) / 2;
    let B = twoAndOneScore * 0.5;
    let C = twoAndOneScore;
    let D = (C / B) * 0.5 * 100;

    console.log('KDT팀이 이 날 성공한 2점슛은 총 ' + A + '회 입니다.');
    console.log(
      '그리고 상대팀으로부터 자유투를 ' +
        B +
        '번 획득해, 총 ' +
        C +
        '개의 자유투를 성공하였습니다.'
    );
    console.log('이 날 KDT팀의 자유투 성공률은 ' + D + '% 입니다');
  }
}
score_analysis(84, 16);

// console.log(3 * 16); //48
// console.log(84 - 48); //36
// console.log(36 / 2); //18점씩?
