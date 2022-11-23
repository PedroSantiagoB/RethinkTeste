const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geraldo do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

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