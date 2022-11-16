/**
 * interface 문법은 타입스크립트, 즉 개발만을 위해 존재하는 문법 
 * 아래의 실존하는 pokemon과 다르다
 * interface방식으로 선언된 pokemonInformation은 다른 곳에서도 쓰일 수 있기 때문에
 * 따로 선언하는 방식으로 구조가 만들어져 있다.
 * 객체를 한 번만 쓰는 경우보다 인스턴스로 수천수백개를 쓰는 상황이 훨씬 많기 때문에
 * 인터페이스 작성법은 if문 타입제어를 획기적으로 줄일 수 있다
 * 생성자 함수와 매우 궁합이 좋다
 */
interface pokemonInformation {
  id : number;
  name : string;
  type : string;
}

const pokemon: pokemonInformation = {
  id: 1,
  name: "이상해씨",
  type: "풀"
}