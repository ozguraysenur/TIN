function findSecondSmallestBiggest(numbers){
    var second_highest = numbers.sort(function(a, b) { return b - a; })[1];
    var second_smallest = numbers.sort(function(a, b) { return a - b; })[1];
    return [second_smallest,second_highest];
} 
var arr = [20, 120, 111, 215, 54, 78];
console.log(findSecondSmallestBiggest(arr));