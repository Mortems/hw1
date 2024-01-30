/*первое задание*/

let a = 0;

while ( a < 2 ) {
    alert ("Привет")
a++;
}


/*второе задание*/

let b = 0;
while (a < 5) {
    b++;
    console.log(b)
}

/*третье задание*/

let c = 7;
while (c < 22) {
    c++;
    console.log(c)
}


/*четвертое задание*/

let obj = {
    "Коля": "200"
    "Вася": "300"
    "Петя": "400"
}

for (let element in obj) {
    console.log(`${element} - зарплата ${obj[element]} долларов`);
}


/*Пятое задание*/

let num = 0;

for (let i = 1000; i >= 50; i /= 2) {
    num++;
    console.log('Получилось число: ' + i + '.');
}

console.log('Всего итераций: ' + num);

/*Шестое задание (убейте меня)*/
for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}