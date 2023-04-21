let x = 7;
let answer;

if (x < 0) {
    answer = x + 3;
} else if (x >= 0 && x <= 8) {
    answer = Math.pow(x, 2);
} else {
    answer = x / 2;
}

console.log(answer);

let color = 'синий';

switch (color) {
    case 'синий':
        color = 'blue';
        break;
    case 'зеленый':
        color = 'green'
        break;
    case 'красный':
        color = red;
        break;
}
console.log(color);
document.body.style.backgroundColor = color;
