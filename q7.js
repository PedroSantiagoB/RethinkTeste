const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geraldo do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

function averageAge() 
{
  let ages = pessoas.map((object) => object.age);
  let ageSum = ages.reduce((accumulator, current) => accumulator + current, 0);
  let avgAge = ageSum / pessoas.length;

  console.log("Media de idades: " + avgAge);
}

averageAge();
