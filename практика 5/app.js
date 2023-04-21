let mass1 = [
  "Банан",
  "Яблоко",
  "Груша",
  "Апельсин",
  "Манго",
  "Свекла",
  "Капуста",
  "Морковь",
  "Огурец",
  "Томат",
];
let mass2 = [
  "Тигр",
  "Волк",
  "Лев",
  "Медведь",
  "Рысь",
  "Синица",
  "Филин",
  "Ворона",
  "Воробей",
  "Сорока",
];
let fruit = mass1.slice(0, 5);
let birds = mass2.slice(5, mass2.length);
// console.log(birds);
// console.log(fruit);
let mass3 = birds.concat(fruit);
// console.log(mass3);

let drawHTMLFirst = () => {
  let h1 = document.createElement("h1");
  let h1num2 = document.createElement("h1");
  let h1num3 = document.createElement("h1");
  let capac_list = document.createElement("h1");
  let tr = document.createElement("tr");
  let unshift_array = document.createElement('h1');
  document.body.append(h1);
  document.body.append(h1num2);
  document.body.append(h1num3);
  document.body.append(tr);
  document.body.append(capac_list);
  document.body.append(unshift_array);
  h1.innerHTML = `первый массив: ${mass1} `;
  h1num2.innerHTML = `второй массив: ${mass2}`;
  h1num3.innerHTML = `третий массив: ${mass3}`;
  capac_list.innerHTML = `mass1 = ${mass1.length}; mass2 = ${mass2.length}; mass3 = ${mass3.length}; birds = ${birds.length}; fruit = ${fruit.length};`;
};

drawHTMLFirst();
mass3.unshift("Мандарин");
mass3.push("Соловей")
let h2 = document.createElement('h2')
document.body.append(h2);
h2.innerHTML = `Вставка: ${mass3}, размер: ${mass3.length}`;
mass3.reverse();
console.log(`reversed: ${mass3}`);
let drawHTMLSecond = () => {
  let newh3 = document.createElement('h1');
  document.body.append(newh3);
  newh3.innerHTML = `перевернутый массив 3: ${mass3}`;
}
drawHTMLSecond();
mass3.sort();
let h2num2 = document.createElement('h2');
document.body.append(h2num2);
h2num2.innerHTML = `sorted: ${mass3}`;