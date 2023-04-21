let somestring = 'aaa@bbb@ccc';
somestring = somestring.replace('@','!');
if (somestring.indexOf('@')) {
    somestring = somestring.replace('@', '!'); 
}
console.log(somestring);

let h, m, s, day, month, year, current_time;
let time = new Date;
day = time.getDate();
current_time = time.getTime();
day_week = time.getDay();
year = time.getFullYear();
month = time.getMonth() + 1;
h = time.getHours();
m = time.getMinutes();
s = time.getSeconds();
switch (month) {
    case 4:
        month = 'апреля'
        break;
    case 5:
        month = 'мая'
        break;
}

switch (day_week) {
    case 1:
        day_week  = 'понедельник'
        break;
    case 2:
        day_week = 'вторник'
        break;
    case 3:
        day_week = 'среда'
        break;
    case 4:
        day_week = 'четверг'
        break;
    case 5:
        day_week = 'пятница'
        break;
    case 6:
        day_week = 'суббота'
        break;
    case 7:
        day_week = 'воскресенье'
        break; 
}
console.log(`В Самаре ${day} ${month} ${year}, ${day_week}` );
console.log(`Время: ${h}:${m}:${s}`);

let date_task = "2020-02-18";
date_task =  date_task.split("-").join(":");

let iam = 'Я изучаю JavaScript!';

iam = iam.toLowerCase();
console.log(iam);
iam = iam.toUpperCase();
console.log(iam);
console.log(`total symbols: ${iam.length}`);

iam = iam.substring(2, 8);
console.log(iam);

let cypher = '(1052)(1086)(1089)(1082)(1074)(1072)';
let samara = 'Самарa';
samara = samara.charCodeAt();
console.log(samara);
