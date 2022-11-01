// training -2 | 생성자 함수 getter
// 구조체, 자료구조 관점을 중요하게 

// 인스턴스의 프로퍼티를 만들어주는 constructor() 함수
class RgbaColor {
  constructor(red, green, blue, alpha = 1) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  //생성자 함수의 주요 기능 중 하나인 getter 기능
  //사용하는 키워드는 get
  get rgba() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
  }
}

let pracRgbaColor = new RgbaColor(200, 200, 200);
console.log(pracRgbaColor); //RgbaColor { red: 200, green: 200, blue: 200, alpha: 1 }
console.log(pracRgbaColor.rgba); //rgba(200,200,200,1)
