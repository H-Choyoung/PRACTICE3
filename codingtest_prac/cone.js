// 원뿔의 부피 계산하는 애플리케이션

const cone_volume = (radius, height) => {
  if (
    1 <= radius <= 100 &&
    Number.isInteger(radius) === true &&
    1 <= height <= 100 &&
    Number.isInteger(height) === true
  ) {
    const r = radius;
    const h = height;
    const perimeter = 3.14159; //원주율

    const result = (perimeter * Math.pow(r, 2) * h) / 3;
    if (typeof result === 'number') {
      return Math.round(result); //반올림
    }
  } else {
    console.log('정수값을 입력하시오');
  }
};
console.log(Math.pow(2, 2));
console.log(cone_volume(2, 90)); //377
console.log(cone_volume(2.5, 90)); //정수값을 입력하시오
