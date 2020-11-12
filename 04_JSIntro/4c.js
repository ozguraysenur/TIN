function palindrome(str){
    if(str==="") {
		console.log("Nothing found!");
		return false;
    }
    // Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

   for (i = 0, j = cstr.length - 1; i < j; i++, j--) {
    if (cstr[i] !== cstr[j])
        return false;
}
return true;

}
var p1 ="Al kazık çak karaya kayarak kaç kızakla.";
var p2="Aysenur";
console.log(p1+ " Is palindrome ? " + palindrome(p1));
console.log(p2+ " Is palindrome ? " + palindrome(p2));