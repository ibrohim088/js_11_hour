// const { log } = require("console");

const { log } = require("console");

// const myCity = {
//    city: 'Toshkent',
//    info: {
//       isPopular: true,
//       country: 'UZB'
//    }
// };

// console.log(myCity.city); // Toshkent
// console.log(myCity.info.country); // UZB

// delete myCity.info.isPopular; // delete true
// console.log(myCity);



// JSON PARSE ================================================
// convert json > obj JSON.parse()
// raspersit obj > json JSON.stringify()

// const post = {
//    title: "my post",
//    likesQty: 5,
// }

// console.log(post); //? { title: 'my post', likesQty: 5 }

// console.log(JSON.stringify(post)); //! {"title":"my post","likesQty":5}

// const postStringified = JSON.stringify(post)

// console.log(JSON.parse(postStringified));  //? { title: 'my post', likesQty: 5 }


// ----------------==========================================
// ? мутирование копий

// const person = {
//    name: 'Bop',
//    age: 25
// }
// ? const person2 = person
// ? как избежать мутаций
// const person2 = Object.assign({}, person)
// assign создаст новый обект {} и внутер засунет person2

// person2.age = 26
// person2.isAdual = true

// console.log(person2.age); // 26
// console.log(person.isAdual); // true
// console.log(person.age); // 25

//! function ===== -----------------------------------------------
/*
function myFn(a,b) {
   let c
   a = a + 1 // 11 =  10 + 1
   c = a + b // 14 = 11 + 3

   return c
}

myFn(10,3)

? ---------------------------------------------------

const personOne = {
   name: 'bob',
   age: 21
}

function increasePersonAge(person) {
   person.age += 1
   return person
}

increasePersonAge(personOne);
console.log(personOne.age); // ? 22

в нутри function можно создовать копий обектов

function increasePersonAge(person) {
   const updatePerson = Object.assign({}, person)
   updatePerson.age += 1
   return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age); // ? 21
console.log(updatePersonOne.age); // ? 22



// ! callback function =---------------------------------------
? call back function structor
? call back function
function anotherFun() {
   anything
}
function fnWithCallBack(callbackFN) {
   callbackFN()
}
fnWithCallBack(anotherFun)
function printMyname() {
   console.log('ibo');
}
setTimeout(printMyname, 1000) // befor 1000 log => ibo

// ? областной видемость function
let a
let b

function myFN() {
   let b
   a = true
   b = 10
   console.log(b);
}

myFN();

console.log(a); // true
console.log(b); // udefined
? цепочка областной видемость

const a = 5
function myFN() {
   function innerFN() {
      console.log(a); // 5
   }
   innerFN()
}

myFN()

! для того чтобы анализировать JS в строгом режыме надо сделать
если убрать use strict 
'use strict'
log true true

 function myFN() {
   a = true // Uncaught
   ! log referenceError: a is not defined at myFN
   console.log(a);
}

myFN()

console.log(a);

? arrow function

const arrowFN = (a,b) => {
   let c 
   a = a + 1
   c = a + b
}
arrowFN(5,5)

?-------------------------------------------
!default params function

const newPost = (post, addedAt = Date()) => ({
   ...post,
   addedAt,
})

const firstPost = {
   id: 1,
   author: 'ibo'
}

newPost(firstPost)

*/


// Операторы -----------------------------------------

/* 
  арифматический 
  '+'  '-'  '/' '*'
  сравнения ----------------------------------------
  '===' '!=='  '<=' '>='

  логический ----------------------------------------
  '! = не' ' && = и ' ' || = или'

  Присваивания --------------------------------------
  =

 оператор разделения обекта на свойства -------------
 rest оператор ------
  ... 

? -------------------------------

 const btn = {
   width: 200,
   text: 'buy'
 }

 const redBtn = {
   ...btn, ? если у обекта есть такой свойство то она будет перезаписона
   color: 'red'
 }

 console.table(redBtn)
 console.log(redBtn);

? -------------------------------

const btnInfo = {
   text: 'buy'
}

const btnStyle = {
   color: 'yellow',
   width: 200,
   height: 300,
}

const btn = {
   ...btnInfo,
   ...btnStyle,
}
console.table(btn)
*/

// ? Обработка ошибок в JS -------------------------------------
/*
 ! try catch 
 ! then
 ! catch
 !if | else

 try {
   const fnWithError = () => {
      throw new Error('Some error')
   }
   fnWithError()
} catch (error) {
   console.log(error.message);  // some error
   console.log('Continue');
}
*/


// array --------------------
const array = [1, 1, 2, 3, 5, 8, 13]
// const arrayTS: number[] = [1,1,2,3,5,8,13]
// const arrayTS: Array<number> = [1,1,2,3,5,8,13]
array.length // 7
array[0] // 1

// ? methods pop() -------------------------------------------
// methods pop удаляет последний элемент масива
// и возврашает удаленный элеменет

/*
const myArr = [1,2,3]
console.log(myArr); // [1,2,3]
myArr.pop()

const removeElem = myArr.pop()
console.log(myArr); // [1]
console.log(removeElem); // 2
*/
// ? methods unshift() ----------------------------------------

// Метод unshift() добавляет один или более
// элементов в начало массива и возвращает новую длину массива.
/*
const myArr2 = [1,2,3]
console.log(myArr2);

myArr2.unshift(true)

console.log(myArr2); // [ true, 1, 2, 3 ]

myArr2.unshift('abc')

console.log(myArr2);
*/

// ? methods shift() ----------------------------------------
// Метод shift() удаляет первый элемент из массива и
// возвращает его значение. Этот метод изменяет длину массива.

/*
const myArr2 = [1,2,3]
console.log(myArr2);

myArr2.shift(true)

console.log(myArr2); // [ true, 1, 2, 3 ]

myArr2.shift('abc')

console.log(myArr2);
*/

// ? methods forEach() ----------------------------------------
// Метод forEach() выполняет указанную функцию один
// раз для каждого элемента в массиве.
/*
! одним словам запускает цикл
! не меняет орегиналные массив

const myArr = [1, 2, 3]
console.log(myArr); // [1,2,3]

const res = myArr.forEach(el => console.log(el * 2))
!  1 * 2  , 2 * 2 , 3 * 2
console.log(res);
console.log(myArr); // [1,2,3]
*/

// ? methods map() ----------------------------------------
// Метод map() создаёт новый массив с результатом
// вызова указанной функции для каждого элемента массива.
// возврашает новый массив, не меня я оригиналный массив
/*
 ! const myArr = [1, 2, 3]
 ! console.log(myArr);
 ! const newArr = myArr.map(el => el * 3)
 ! const newArr = myArr.map((el) => { return el * 3 })
 ! console.log(newArr); // [3,6,9]
 ! console.log(myArr); // [1,2,3]
*/

// ? ДЕСТРУКТУРИЗАТЦИЯ =====================================================================
// ? ДЕСТРУКТУРИЗАТЦИЯ =====================================================================
/*
const useProfile = {
   name: 'ibo',
   commentsQty: 23,
   hasSignedAgreement: false,
}
? вот это ДЕСТРУКТУРИЗАТЦИЯ
const { name, commentsQty } = useProfile
const { hasSignedAgreement } = useProfile
console.log(name); // ibo
console.log(commentsQty); // 23

! -----------------------------------------------

const fruits = ['apple', 'banana']
? вот это ДЕСТРУКТУРИЗАТЦИЯ
const [fruitOne, fruitSec] = fruits
console.log(fruitOne);
console.log(fruitSec);

!-------------------------------------------------

const useProfile = {
   name: 'ibo',
   commentsQty: 23,
   hasSignedAgreement: false,
}
? вот это ДЕСТРУКТУРИЗАТЦИЯ
const userInfo = ({name, commentsQty}) => {
   if(!commentsQty) {
      return `User ${name} has no comments`
   }
   return `User ${name} has ${commentsQty} comments`
}
userInfo(useProfile)
console.log(userInfo(useProfile)); // User ibo has 23 comments
*/

// ? ИНСТРУКЦИЯ IF ELSE | |  SWITCH CASE
// ? IF ELSE ==================================================================
// ? IF ELSE ==================================================================
/*
const person = {
   age: 18
}

|person.name undefined === false
|!person.name undefined === true

if (!person.name) {
   console.log('name not found!');
}


const age = 18;

if (age >= 18) {

   console.log('Is adult');

} else if (age >= 12 && age < 18) {

   console.log('Is teenager');

} else {

   console.log('Is child');

}
!----------------------------------------------------
const sumpositiveNumbrs = (a, b) => {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'One of the arguments is not a number'
   } else if (a <= 0 || b <= 0) {
      return 'Number are not positive'
   } else {
      return a + b
   }
console.log(sumpositiveNumbrs());
*/

// ? switch case ----------------------------------------------

// const month = 2
// switch (month) {
//    case 12:
//       console.log('dec');
//       break
//    case 1:
//       console.log('jan');
//       break
//    case 2:
//       console.log('feb');
//       break
//    default:
//       console.log('Это не зимний месяц');
// }

// ? ТЕРНАРНЫЙ ОПЕРАТОР  ---------------------------------------
// У ТЕРНАРНОГО ОПЕРАТОРА ТРИ ОПЕРАНДА
// КОНСРУКЦИЯ С ТЕРНАРНЫМ ОПЕРАТОРОМ - ВЫРАЖЕНИЕ
// ВЫРАЖЕНИЕ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ
/*
const value = 11

value ? console.log('условие истинно') : console.log('условие ложно');

const value1 = 11
const value2 = 18
value1 && value2 ? myFN1(value1, value2) : myFN2()

let value = 11
console.log(value >= 0 ? value : value); // 11

value = -5
const res = value >= 0 ? value : -value
console.log(res); //5
*/

// ? ЦИКЛЫ ============================================================
// for loop , for of , for in ,
// forEach , map , filter , while
// ? FOR LOOP -----------------------------------
/*
const myArr = [true , 'abc' , 10]

for (let i = 0; myArr.length > i ; i++ ){
   console.log(myArr[i]);
}
*/

// ? forEach ------------------------------------
/*
const myArr2 = ['first', 'second', 'third']
myArr2.forEach((el, i) => {
   console.log(el, i);
})
? terminal ----------------------------------
? first 0
? second 1
? third 2
*/

// ? WHILE --------------------------------------
// ВЫПОЛНЯЕТСА ПОКА УСЛОВИЯ ПРАВДИВО
// ? not infinity cycle | цикл
/*
let i = 0
while (i < 5) {
   console.log(i);
   i++
}
console.log(i);

? infinity cycle | цикл
let i = 0
while (i < 5) {
   console.log(i);
}
*/
// ? WHILE DO -----------------------------------
// ЕСЛИ УСЛОВИЯ НЕ ВЕРНОЕ ТО ОНА
// ВЫПЕЛНИТСА ХОТЯБЫ ОДИН РАЗ
/* 
let i = 0
do {
   console.log(i);
   i++
} while (i < 5)
*/
// ? FOR IN -------------------------------------
/*  */
const myObj = {
   x: 10,
   y: true,
   z: 'abc',
}
/* 
? keys and value ----------------------
for (const key in myObj) {
   console.log(key, myObj[key]);
}

? value
Object.values(myObj).forEach(value => {
   console.log(value);
})

? LOG -----------------------------

? keys and value ------------------
x 10
y true
z abc
? value ---------------------------
10
true
abc
*/
// ? FOR OF -----------------------

// ДЛЯ МАССИВА ЛУТШИЙ ВАРИАНТ ЭТО FOREACH
// FOR OF НЕЛЬЗА ИСПОЛЬЗОВАТЬ ДЛЯ OBJECT 
// ПОТОМУЧТО FOR OF НЕ ЗНАЕТ КАК ПЕРЕБРАТЬ ПОСЛЕДОВАТЕЛЕЙ ОБЕКТОВ 
// ЛУТЧУШ ВАРИАН ДЛЯ OBJ ЭТО КОВЕРТАЦИЯ ИХ В MASSIV
// А ПОТОМ ВСТАВИТ КАКОЙ ЛИБО УДОБНЫЙ ЦИКЛ
/* 
const mySTR = 'HEY'

for (const letter of mySTR) {
   console.log(letter);
   ? LOG -----
   ? H
   ? E
   ? Y
   ? ---------
}

const myarr = [true, 10, 'abc', null]

for(const el of myarr) {
   console.log(el);
}
*/

// ? МОДУЛИ --------------------------------------
// import export

