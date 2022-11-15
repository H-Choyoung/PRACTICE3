def game_money(getLeather):
    # 단위 : 쿠퍼
    cooper = 1
    silver = 8 * cooper
    leather = 2 * silver
    gold = 4 * silver
    leatherToCooper = getLeather * leather  # 720cooper
    leatherToGold = leatherToCooper / gold  # 22.5골드
    isInt = isinstance(leatherToGold, int)
    print(isInt)  # False

    if (isinstance(leatherToGold, int) == False):
        getGoldOnly = int(leatherToGold)  # 골드(정수) 획득
        outOfgoldToCooper = (leatherToGold - getGoldOnly) * gold
        # console.log(outOfgoldToCooper); #16cooper

        # 출력
        A = '이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ' + \
            str(getGoldOnly) + '개 입니다.'
        B = 'gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ' + \
            str(outOfgoldToCooper) + '개의 copper를 챙겼습니다.'
        C = '공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ' + \
            str(getGoldOnly*8) + 'gold, ' + \
            str(outOfgoldToCooper * 8) + "copper'를 얻었습니다"

        print(A)
        print(B)
        print(C)

game_money(45)
