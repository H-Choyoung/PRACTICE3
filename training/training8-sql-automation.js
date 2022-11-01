const pokemon = {
  eng : {
    bulbasaur: "Bulbasaur_column",
    ivysaur : "Ivysaur_column",
    venusaur : "Venusaur_column",
    charmander : "Charmander_column",
    charmeleon : "Charmeleon_column",
    charizard : "Charizard_column",
    squirtle : "Squirtle_column"
  },

  restExam : function(QUERY, ...columns){
    let temp = [];
    columns.map(column => {temp.push(column)});
    let setVal = `${QUERY.toUpperCase()} ${temp.join(", ")}`
    return setVal;
  },
//literalMethod : 한 번만 간단히 쓰기 위한 getter 형식을 일반함수로 구현한 예 
  literalMethod : function(QUERY){
    let temp = [];
    for(let key in this.eng){
      temp.push(this.eng[key]);
    }
    return `${QUERY.toUpperCase()} ${temp.join(", ")}`;
  }
}

function arraySet(obj){
  obj = typeof obj === 'object' ? obj : console.error('not Object');
  let temp = [];
  for(let key in obj){
    temp.push(obj[key]);
  }
  return temp.join(", ");
}

console.log(pokemon.literalMethod('select'));
//키가 몇 개든 배열처럼 처리하게끔 논리를 만든
console.log(pokemon.restExam('select', arraySet(pokemon.eng, ",")));