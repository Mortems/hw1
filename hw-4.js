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
let u = 7
while (u < 23) {
  alert (число ${u});
u++;
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

let m= 1000;
let lum= 0;
do {
m = m / 2
alert (число ${m})
lum ++}
while ( m >= 50)
alert (числе итераций ${lum})

/*Шестое задание (убейте меня)*/
for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}