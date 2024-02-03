/*первое задание*/
let a = 10;
alert(a);
a = 20;
alert(a);

/*второе задание*/
let firstIphone = 2007;
alert(`Год выпуска первого айфона ${firstIphone}!`);

/*третье задание*/
let bestJsMan = "Брендан Эйх";
alert(bestJsMan);

/*четвертое задание*/
let b = 10;
let c = 2;
alert (b + c)
alert (b - c)
alert (b * c)
alert (b / c)



/*пятое задание*/
let result = 2 ** 5 
alert (result)

/*Шестое задание*/
let m = 9
let n = 2
alert (m % n)

/*седьмое задание*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*восьмое задание*/
let age = prompt ("Ваш возраст")
alert (age)


/*задания 9-9.4*/
let user={name:"Джек Лондон",
age: 27,
isAdmin: true}
user["city of residence"]="Сан-Франциско";
user.age=31;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info])/ 

/*задание 10*/
let names= (prompt("Хай друг, как тебя зовут?"));
let greeting= `Привет ${names}!`;
alert (greeting);
let city= (prompt ("А из какого города?"));
let hi= `Приветствуем тебя ${names} из славного города ${city}`
alert (hi)