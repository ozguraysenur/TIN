//constructor function
function Student(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades=grades;
    this.NameSurnameAndAverage = function() {
        let arrSum = grades.reduce((a,b) => a + b);
        let average = arrSum /grades.length;
               
        console.log(this.firstName + " " + this.lastName + " " + "grade average : "  + average);
    }
  }
  var student1 = new Student("Aysenur" ,"Ozgur" ,"s19358",[90,95,100]);
  var student2 = new Student("Busra" ,"Yilmaz" ,"s1111",[80,90,100]);

  student1.NameSurnameAndAverage();
  student2.NameSurnameAndAverage();