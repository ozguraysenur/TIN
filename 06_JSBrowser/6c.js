function validation() {
    var mes=document.getElementById("message");

    var x = document.forms["myform"]["fname"];
    var name= x.value;
   
    if (name == "") {
      mes.textContent="Name must be filled out";
      x.style.backgroundColor = 'red';
      return false;
    }


    var y = document.forms["myform"]["age"];
    var age=y.value;
    if (age == "" || age < 0) {
        mes.textContent="Age must be filled out";
        y.style.backgroundColor = 'red';
      return false;
    }


    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var z = document.forms["myform"]["mail"];
    var email=z.value;
    if (!mailformat.test(email)) {
         mes.textContent="Email is not valid!";
         z.style.backgroundColor = 'red';
        return false;
  }
}