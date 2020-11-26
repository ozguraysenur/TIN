function AddRow () { 
const table = document.getElementById('mytable');

const name = document.getElementById('fname').value;
const surname = document.getElementById('lname').value;
const age = document.getElementById('age').value;


const row = document.createElement('tr');

const n= document.createElement('td');
const s= document.createElement('td');
const a= document.createElement('td');

n.innerHTML = name;
s.innerHTML = surname;
a.innerHTML = age;


row.appendChild(n);
row.appendChild(s);
row.appendChild(a);
table.children[0].appendChild(row);

document.getElementById("myform").reset();


}
