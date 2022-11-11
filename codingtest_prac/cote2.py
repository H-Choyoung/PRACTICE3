def score_analysis(allScoreNum, getPointThree):
    getThree = 3 * getPointThree
    getTwo = 2
    free = 1

    if type(getThree) is int and type(getTwo) is int and type(free) is int:
        allScore = allScoreNum
    twoAndOneScore = allScore - getThree
    A = (twoAndOneScore * 0.5) / 2
    B = twoAndOneScore * 0.5
    C = twoAndOneScore
    D = (C / B) * 0.5 * 100

    print('KDT팀이 이 날 성공한 2점슛은 총 ' + str(A) + '회 입니다.')
    print(
        '그리고 상대팀으로부터 자유투를 ' +
        str(B) +
        '번 획득해, 총 ' +
        str(C) +
        '개의 자유투를 성공하였습니다.'
    )
    print('이 날 KDT팀의 자유투 성공률은 ' + str(D) + '% 입니다')


score_analysis(84, 16)
