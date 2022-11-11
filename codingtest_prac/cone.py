# 원뿔의 부피 계산하는 애플리케이션

def cone_volume(radius, height):
    is_type_int = type(radius) is int and type(height) is int
    is_range = 1 <= radius <= 100 and 1 <= height <= 100

    perimeter = 3.14159  # 원주율

    if is_type_int and is_range:
        result = perimeter * (radius ** 2) * height / 3
        return print(round(result))  # 반올림 출력
    elif is_type_int == False:
        print('is not int')
    elif is_range == False:
        print('is off range')
    else:
        print('계산할 수 없음')


cone_volume(2, 90)  # 377
cone_volume(2.1, 90)  # is not int
cone_volume(101, 900)  # is off range
