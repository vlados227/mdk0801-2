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

let addgap = () => {
  let breakpage = document.createElement('br');
  document.body.append(breakpage);
}

mass3.sort();
let h2num2 = document.createElement('h2');
document.body.append(h2num2);
h2num2.innerHTML = `sorted: ${mass3}`;


for (let i = 0; i < fruit.length; i++) {
  fruit[i] = fruit[i] + " съел";
}

let added = document.createElement('h2');
document.body.append(added);
added.innerHTML = fruit;

// В массиве bird замените Ворону и Воробья на Галку и Голубя. Выведите полученный массив.
birds.splice(2, 2, "Галка", "Голубь");
document.write(birds);

let TimeOfYear = [
  ["зима: ", "весна: ", "лето: ", "осень: "],
  ["декабрь", "январь", "февраль"],
  ["март", "апрель", "май"],
  ["июнь", "июль", "август"],
  ["сентябрь", "октябрь", "ноябрь"]
]
addgap();
document.write(`<h1><b>Времена года:</b></h1>`)
let drawTimeOfYear = () =>{
  document.write(TimeOfYear[0][0]);
  document.write(TimeOfYear[1][0]);
  document.write(` ${TimeOfYear[1][1]} `);
  document.write(TimeOfYear[1][2]);
  addgap();
  document.write(TimeOfYear[0][1]);
  document.write(TimeOfYear[2][0]);
  document.write(` ${TimeOfYear[2][1]} `);
  document.write(TimeOfYear[2][2]);
  addgap();
  document.write(TimeOfYear[0][2]);
  document.write(TimeOfYear[3][0]);
  document.write(` ${TimeOfYear[3][1]} `);
  document.write(TimeOfYear[3][2]);
  addgap();
  document.write(TimeOfYear[0][3]);
  document.write(TimeOfYear[4][0]);
  document.write(` ${TimeOfYear[4][1]} `);
  document.write(TimeOfYear[4][2]);
}
drawTimeOfYear()
addgap();
//objects task
let worker = {
  name: "Anatoliy",
  surname: "Chmuckuch",
  age: 27,
  salary: 1488,
}
addgap();
document.write("<b>свойства объекта:</b>");
for (let key in worker) {
  addgap();
  document.write(worker[key]);
}
addgap();
worker.name = 'Valera';
document.write("<b>Измененные свойства объекта: </b>")
let modifyWorkerProps = () =>{
  for (key in worker) {
    addgap();
    document.write(worker[key]);
  }
}
modifyWorkerProps();
let ShowSalary = () => {
  let draw = document.createElement('h1');
  document.body.append(draw);
  draw.innerHTML = `Зарплата ${worker.name} - ${worker.salary}`;
}
ShowSalary();

let MyImages = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
];
let userInput = prompt('Какое изображение загрузить?');
let selectedImage = MyImages.find(image => image.includes(userInput));