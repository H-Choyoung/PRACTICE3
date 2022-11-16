inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]; 
def sortArray(array):
  for i in range(1, len(array)):
    for j in range(i, 0, -1):
      if array[j-1]>array[j]:
        array[j-1], array[j]=array[j], array[j-1]
      else:
        break
  return array

arrResult = sortArray(inputData)
print(sortArray(inputData))

result = {'one':arrResult[0], 'two':arrResult[1], 'three':arrResult[2], 'four':arrResult[3], 'five':arrResult[4]};


# def sortArray(array):
#   for i in array:
#     # print(i); #0~9
#     val = array[i]; #배열의 값
#     for j in array:
#       j=i-1
#       j<=0 and array[j]>val
#       j-=1
#       array[j+1] = array[j]
#       step = 0
#       step+=1
#     array[j+1]= val;
#   print('총'+str(step)+'번 순서 변경')
#   return array;

print(result);