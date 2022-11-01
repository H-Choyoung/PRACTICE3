# training -2 | 생성자 함수 getter
# 인스턴스의 프로퍼티를 만들어주는 def __init__()함수
class RgbaColor:
  def __init__(self, red, green, blue, alpha = 1):
    self.red = red
    self.green = green
    self.blue = blue
    self.alpha = alpha
  # 생성자 함수의 주요 기능 중 하나인 getter 기능
  # 파이썬은 새로운 키워드로 함수를 만드는 것 대신 데코레이터라는 개념으로 해당 함수의 성격을 정의한다.
  # 아래의 @property라는 작성법이 대표적인 데코레이터 문법
  @property
  def rgba(self):
      # 템플릿 문자열을 .format()이라는 함수로 지원하는 것을 확인할 수 있다.
      return 'rgba({},{},{},{})'.format(self.red, self.green, self.blue, self.alpha)
    
pracRgbaColor = RgbaColor(200, 354, 236, 994)
print(pracRgbaColor.__dict__) #{'red': 200, 'green': 354, 'blue': 236, 'alpha': 994}
print(pracRgbaColor.rgba) #rgba(200,354,236,994)