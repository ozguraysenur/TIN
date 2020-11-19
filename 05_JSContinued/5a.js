var person ={name : "Aysenur", //object initializer
             surname : "Ozgur" ,
             yearOfbirth : 1997,
             "s" : 19358,
             5: 6 ,
             sayHello : function(){
                console.log("hello!");
             } ,
             age : function(){
                 return new Date().getFullYear()-this.yearOfbirth;
             }

            };

function introduceYourself(object){  
    for (const i in object) {
        console.log(i +" value:" + object[i] + "\ntype:" + typeof object[i] + "\n");
    }
    
}  

introduceYourself(person);  

//console.log(person.age());
//person.sayHello();

  

