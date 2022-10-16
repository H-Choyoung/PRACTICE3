import calc from '../core-modules/calculrator.js'

/*
원의 넓이 구하는 공식 = 반지름 x 반지름 x PI
*/

/**
 * 원의 넓이를 구하는 함수입니다.
 * @param {number} circleRadius : 
 * 픽셀로 들어갈 데이터가 필요합니다.
 * @returns number and int
 * 
 * 리턴이 정수 형태로 들어가있기 때문에 인자(argument)는 꼭 정수가 아니어도 사용 가능
 * 
 */

export default function areaOfCircle(circleRadius) {
    let radiusSquareVal = calc.multiplication(circleRadius, circleRadius);
    let getResultInt = calc.multiplication(radiusSquareVal, Math.PI);
    return Math.ceil(getResultInt);
    //주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환함 
}