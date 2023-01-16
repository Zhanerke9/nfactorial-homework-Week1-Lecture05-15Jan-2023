// EX-1
// ### Тренируемся общаться с пользователем посредством alert / confirm / prompt.
// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли.
alert("Hello user! We will ask you some questions, ok?");
let userAnswer = confirm("are you a human?");
console.log(userAnswer);
let userName = prompt("What is your name?", "");
console.log(userName);
let userAge = prompt("How old are you?", "");
console.log(userAge);
console.log(typeof userAge);
let userGender = prompt("What is your gender?", "");
console.log(userGender);
console.log(typeof userGender);

// Ex-2
// ### Работа с операторами.
// 1. Используя конструкцию `if..else`, напишите код, который получает число через `prompt`, а затем выводит в `alert`.
let userAge2 = prompt("How old are you?", "");
if(num > 0){
  alert("Good!");
}
else if(num < 0){
  alert("Incorrect imput");
  }
  else {
  alert("Are you a newborn?");
  };

//Ex-3
// ### Работа с условиями.
// 1. Перепишите этот блок кода с использованием оператора `switch`.

// given code is as per below:
// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

//with switch statemet:
let a = +prompt("a?", "");
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    console.log("the code is different from all given cases");
}

// Ex-4
// ### Работа с циклами(loops).
// 1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// 2.  Перепишите цикл `for` на `while`.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// below is a new code:
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
