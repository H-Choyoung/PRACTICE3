function score_analysis2(allScoreNum, getPointThree) {
    var getThree = 3 * getPointThree;
    var getTwo = 2;
    var free = 1;
    if (Number.isInteger(getThree) === true &&
        Number.isInteger(getTwo) === true &&
        Number.isInteger(free) === true) {
        var allScore = allScoreNum;
        var twoAndOneScore = allScore - getThree;
        var A = (twoAndOneScore * 0.5) / 2;
        var B = twoAndOneScore * 0.5;
        var C = twoAndOneScore;
        var D = (C / B) * 0.5 * 100;
        console.log('KDT팀이 이 날 성공한 2점슛은 총 ' + A + '회 입니다.');
        console.log('그리고 상대팀으로부터 자유투를 ' +
            B +
            '번 획득해, 총 ' +
            C +
            '개의 자유투를 성공하였습니다.');
        console.log('이 날 KDT팀의 자유투 성공률은 ' + D + '% 입니다');
    }
}
score_analysis2(84, 16);
// console.log(3 * 16); //48
// console.log(84 - 48); //36
// console.log(36 / 2); //18점씩?
