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
        console.log('blue');
        color = 'blue';
        break;
    case 'зеленый':
        console.log('green');
        color = 'green'
        break;
    case 'красный':
        console.log('red');
        color = red;
        break;
}
document.body.style.backgroundColor = color;
