// training -1 | 생성자 함수의 매력적인 기능 getter와 setter

//생성자 함수는 구조(construction)를 만드는 용도이기 때문에 강력한 기능들을 지원한다. 

class Pokemon {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
  get id() {
    return this.id;
  }
  set id(value) {
    if(Number.isInteger(value) === true) {
      this._id = value;
    } else {
      console.log('id 타입은 정수여야 합니다.');
    }
  }
}
// class 선언
const pikachu = new Pokemon(1.2, '피카츄', '전기');
console.log(pikachu);
//console.log()에는 무슨 값이 나올까? 
// -> 예상: id 타입은 정수여야 합니다
// -> 결과: id 타입은 정수여야 합니다 / Pokemon { name: '피카츄', type: '전기' }
