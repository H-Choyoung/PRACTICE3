const filterData = () => {
const filteredList = list.reduce((acc, cur) => {
  const payStatusKeywordCondition = payStatusKeyword
    ? cur.payStatus === payStatusKeyword
    : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
  const payNumKeywordCondition =
    plateNumKeyword && plateNumKeyword.length > 0
      ? cur.plateNum.includes(plateNumKeyword)
      : true;
  const startDateCondition = startDate
    ? startDate.getTime() - new Date(cur.payDate).getTime() <= 0
    : true;
  const endDateCondition = endDate
    ? endDate.getTime() - new Date(cur.payDate).getTime() >= 0
    : true;

  // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.
  if (
    payStatusKeywordCondition &&
    payNumKeywordCondition &&
    startDateCondition &&
    endDateCondition
  ) {
    acc.push(cur);
  }
  return acc;
}, []);
setFilteredList(filteredList);
}