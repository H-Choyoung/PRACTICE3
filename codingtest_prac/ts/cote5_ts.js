var inputData2 = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
var step2 = 0;
function sortArray2(array) {
    array.forEach(function (n, i) {
        var val = array[i]; //배열의 값
        var j;
        for (j = i - 1; j >= 0 && array[j] > val; j--) {
            array[j + 1] = array[j];
            step2++;
            // console.log(step) //26
        }
        array[j + 1] = val;
    });
    console.log('총' + step2 + '번 순서 변경');
    return array;
}
var arrResult2 = sortArray2(inputData2);
var result2 = {
    one: arrResult2[0],
    two: arrResult2[1],
    three: arrResult2[2],
    four: arrResult2[3],
    five: arrResult2[3]
};
console.log(result2);
