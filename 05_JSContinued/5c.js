const pstudent = {
    firstName: "",
    lastName: "",
    id: "",
    subjects: ["Physics", "Math", "Chemistry","Biology"],
  };
  
  function createStudent(firstName, lastName,id) {
    let newstudent = Object.create(pstudent);
    newstudent.firstName = firstName;
    newstudent.lastName = lastName;
    newstudent.id = id;
  
    return newstudent;
  }
  
  var student= createStudent("Aysenur","Ozgur","s19358");
  
  console.log(student);
  console.log(student.subjects);