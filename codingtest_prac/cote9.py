shape_array = ["spade", "heart", "diamond", "club", "joker"];
def trump_deck():
  #공통 객체와 키값을 만드는 함수
  def deckMaker():
    firstKeys = ['A'];
    numKeys = [2,3,4,5,6,7,8,9,10];
    lastKeys = ['J','Q','K'];
    allKeys = firstKeys+numKeys+lastKeys;
    print(allKeys);
    
    for i in allKeys:
      # keys = allKeys[i]
      vals = i
      # print(keys); #객체 출력
  deckMaker();
  
#   # 카드에 객체를 심어 리턴하는 함수
#   def objMaker(arr):
#     objSet = {};
#     arr.forEach(v,idx):
#       if(v === "joker"):
#         objSet[v] = { "RED" : 1, "BLACK" : 2 }; 
#       else:
#         objSet[v] = deckMaker();
#     return objSet;
#   # console.log(objMaker(shape_array));
#   return objMaker(shape_array)
trump_deck();