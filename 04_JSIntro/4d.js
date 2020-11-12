function makeAlphabet(str) { 
    return str.split('').sort().join('');
}

var str = "webmaster";
console.log(str + " alphabetical order -> "+ makeAlphabet(str));