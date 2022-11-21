// 데이터 조건기반 값 도출 
// 객체 생성용 함수
function inputResult(cycle, taxi, ency, canu, chicken, milk){
    resultObj = 
    {
    "출퇴근비용" : {
      "카카오톡자전거" : cycle,
      "택시" : taxi,
      },
      "커피" : {
        "엔시나" : ency,
        "카누" : canu,
      },
      "고양이간식" : {
        "닭고기" : chicken,
        "락토프리우유" : milk,
      }
    }
    return resultObj
  }

function commingsoon(){
  fixMoney = 
  {
    "출퇴근비용" : {
      "카카오톡자전거" : "1500원",
      "택시" : "3500원",
    },
    "커피" : {
      "엔시나" : "4500원",
      "카누" : "200원",
    },
    "고양이간식" : {
      "닭고기" : "400원",
      "락토프리우유" : "800원",
    }
  }
  fixCount = 
  {
    "출퇴근비용" : {
      "카카오톡자전거" : "19회",
      "택시" : "3회",
    },
    "커피" : {
      "엔시나" : "6잔",
      "카누" : "15잔",
    },
    "고양이간식" : {
      "닭고기" : "30개",
      "락토프리우유" : "2개",
    }
  }
  // 객체의 값에서 숫자를 추출하는 함수
  function getNum(obj){
    let getVals = Object.values(obj);
    let str = JSON.stringify(getVals)
    let found = str.match(/\d+/g);
      return found
      // let parsStr = JSON.parse(newStr)
  }

  let datas = getNum(fixMoney)
  let newObj = inputResult(Number(datas[0]),Number(datas[1]),Number(datas[2]),Number(datas[3]),Number(datas[4]),Number(datas[5]),Number(datas[6]))
  console.log(newObj)
}

/**
 * 게임 64800원
 * 고정지출 예산 100,000원
 * 고정지출에서 어떤 것을 몇 번 절약해야 게임 구매 가능?
 * 절약해야하는 금액 : 35200원
 * 리턴 : 하나의 문장(문자열)로 항목별 절약횟수 도출
 * 35200원을 만들 수 있는 조합... 
 * 고양이 간식은 고정(얼마나 빠지지?)
 * 출퇴근비용(유동)
 * 커피(유동)
 * 값끼리 곱해서 35200원이 나오는 랜덤.. 
 * 
 * 
 */