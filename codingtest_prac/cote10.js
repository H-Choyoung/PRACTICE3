// 주가 경향을 확인하기 위한 증권가 종합지수 막대그래프 만들기
const kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995]
function bar_chart(){
  // const part = document.querySelector(".box_poll_graph");
  // const list = document.querySelectorAll(".list_poll_graph");
  // let rect = list[0].offsetWidth;

  // const xArr = new Array();
  // let xNum = document.createElement("div");
  // xNum.className = "score_list";
  // part.append(xNum);

  const listsContainer = document.querySelector(".list_poll_graph");
  let rect = listsContainer[0].offsetWidth;
  const lists = listsContainer.querySelectorAll("li");
  const scoreVal = new Array();
  rect = listsContainer.style.width = rect/rect * 2050;
  for(let i in lists){
    let bar = document.createElement("div");
    let num = null;
    let width = null;

    num = lists.querySelector(".rate").innerHTML;
    scoreVal.push(+ num);
    bar.className = 'bar';
    bar.style.height = scoreVal/rect * 100 + "%";
    bar.style.width = "20px";
    bar.style.background = "#547";
    lists.append(bar);
  }
}
bar_chart();
// console.log(kdt_invest.length); //9개

/**
 * 종합주가지수 막대그래프
 * 변화량이 값에 비해 미미해 효과적으로 보일 그래프 연출 필요
 * 조건1. kdt_invest기준 : 하루씩 종합하여 산출한 값
 * 조건2. x축은 시간에 비례해서 늘어남(배열 0번째 맨 왼쪽)
 * 조건3. y축은 종합주가지수가 높을수록 맨 아래에서부터 위로 늘어남
 * 조건4. 브라우저에서 보여야 함(DOM API)
 * 조건5. 하루 당 막대그래프의 가로폭은 100px씩  
 */

/**
 * 1. dom추출용 간단한 html부터 만들어본다
 * 2. script에 js함수를 만든다
 * 3. 컨테이너 요소를 만들고 루트 요소에 붙인다
 * 4. 컨테이너 안에 x축 수치용 태그와 그래프 모양용 태그를 만든다
 * 4. 수치에 주어진 배열을 반복 % 그래프 모양의 높이값에 주어진 배열을 반복
 * 5. 적절히 스타일을 주어 정렬한다
 * 6. 가시성을 높이기 위해 각 막대마다 랜덤으로 색이 바뀌게 한다
 * 7. y축...
 */

