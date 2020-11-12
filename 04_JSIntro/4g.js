function typeIdentifier(arg){
    return typeof arg;
}

let inputs=["Aysenur",12,'1',NaN,true,null,undefined,Symbol('foo'),{a: 1},function(){}];

for (const i of inputs) {
    console.log(typeIdentifier(i));
}