// 1 --------------------
const pessoas= [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2},
  { name: "Geraldo do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];
console.log(pessoas);


//2 --------------------

function checkName(name) 
{
  let foundPerson = pessoas.find((pessoa) => pessoa.name === name);
  console.log(foundPerson)
}
checkName("Gabriel Gomes");

//3 --------------------
function listNames() 
{
  let names = pessoas.map((object) => object.name);
  let auxNames = [];
  pessoas.forEach((pessoas, i) => {
    auxNames[i] = names[i].split(' ')[0];
  });
  console.log(auxNames);
}
listNames();

//4 --------------------
function includeId() 
{
  pessoas.forEach((pessoas, i) => {
    pessoas.id = i + 1;
  });
  console.log(pessoas);
}
includeId();

//5 --------------------
function isAbletoDrive()
{ 
    let drivers = pessoas.filter((item) => item.age >= 18);
    console.log(drivers);
}
isAbletoDrive();

//6 --------------------
function averageAge ()
{
    let ages = pessoas.map((object) => object.age);
    let ageSum = ages.reduce((accumulator, current) =>
     accumulator + current, 0);
    let avgAge = ageSum/pessoas.length;
    console.log("Media de idades: " + avgAge);
}
averageAge();


