function findLongest(str){

    if (str.length === 0){

        return "no string found.";
    }
    
    let arr= str.split(' ');
    let max=0;
    let longest="";
    for(i=0; i<arr.length ;i++){
        if(arr[i].length >max){
            max =arr[i].length;
            longest=arr[i];
        }
    }
    return longest;
}
let str ="function that accepts a string as a parameter and find the longest word";
console.log("longest:" +findLongest(str));
