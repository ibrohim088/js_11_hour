// massiv
/* for, for in , for of
forEach , reduce , filter , map , find
! forEach -----------------------------------------
---methods forEach выполняет одну итератцию для 
---каждого эелемента
! filter -----------------------------------------
---Метод filter() создаёт новый массив 
---со всеми элементами, прошедшими проверку,
---задаваемую в передаваемой функции.
! reduce -----------------------------------------
---Метод reduce() применяет функцию reducer 
---к каждому элементу массива (слева-направо)
---возвращая одно результирующ ее значение.
! map -----------------------------------------
---methods map возврашает новый массив он также 
---ожидает callbock function в качестве оргумента
---он неменяет оригиналный массив
! find -----------------------------------------
---Метод find() возвращает значение первого найденного 
---в массиве элемента, которое удовлетворяет условию 
---переданному в callback функции. В противном случае 
---возвращается undefined.

---Также смотрите метод findIndex(), который 
---возвращает индекс найденного в массиве элемента
---вместо его значения.

---Если вам нужно найти позицию элемента или 
---наличие элемента в массиве, используйте 
---Array.prototype.indexOf() или 
---Array.prototype.includes() соответственно.
*/

const people = [
   { name: 'Ibo', lastName: 'Zokirojonov', age: 18, budget: 1200 },
   { name: 'Ali', lastName: 'Karimov', age: 25, budget: 1500 },
   { name: 'Sara', lastName: 'Tursunova', age: 22, budget: 1300 },
   { name: 'Murod', lastName: 'Abdullaev', age: 30, budget: 1800 },
   { name: 'Lola', lastName: 'Ismailova', age: 27, budget: 1600 },
   { name: 'Javohir', lastName: 'Qodirov', age: 21, budget: 1250 },
   { name: 'Diyor', lastName: 'Rustamov', age: 24, budget: 1400 },
   { name: 'Malika', lastName: 'Nazarova', age: 28, budget: 1700 },
   { name: 'Sardor', lastName: 'Yusupov', age: 26, budget: 1550 },
   { name: 'Nigora', lastName: 'Sobirova', age: 23, budget: 1350 },
   { name: 'Bekzod', lastName: 'Sattorov', age: 29, budget: 1650 },
   { name: 'Aziza', lastName: 'Kamolova', age: 22, budget: 1450 },
   { name: 'Sherzod', lastName: 'Eshmatov', age: 31, budget: 1900 },
   { name: 'Zarina', lastName: 'Juraeva', age: 20, budget: 1150 },
   { name: 'Timur', lastName: 'Hasanov', age: 33, budget: 2000 },
   { name: 'Rayhon', lastName: 'Mirzaeva', age: 19, budget: 1100 },
   { name: 'Ulugbek', lastName: 'Toirov', age: 32, budget: 1850 },
   { name: 'Gulbahor', lastName: 'Ergasheva', age: 25, budget: 1500 },
   { name: 'Rustam', lastName: 'Usmonov', age: 28, budget: 1750 },
   { name: 'Sevinch', lastName: 'Solieva', age: 24, budget: 1400 },
];

// for

let totalAge = 0  
let totalPrice = 0

//? ============================================================
/* 
! for ===========================================================

for (let i = 0; i < people.length; i++) {
   totalAge += people[i].age;
}

console.log(totalAge);



с помошю бычного for цикла
const adults = []

for (let i = 0; i < people.length; i++) {
   if(people[i].age > 23) {
      adults.push(people[i])
   }
}

console.log(adults);


for (let i = 0; i < people.length; i++) {
   totalPrice += people[i].budget
}

console.log(totalPrice);//30400



! filter -----------------------------------------------

const filterAge = people.filter((people) => people.age > 20)
console.log(filterAge);

const filterPrice = people.filter(person => person.budget > 1250)
console.log(filterPrice);


const adults = people.filter(person => person.age > 23)
console.log(adults);

! forEach ==========================================

people.forEach((person) => console.log(person.budget * 2))

console.log(people);

log da person.budget умноженый на два

people.forEach((person , index, personArr) => {
   console.log(person);
})


! MAP ----------------------------------------------------------

const newAge = people.map((person) => person.age * 2)

console.log(newAge);

const newPeople = people.map(person => `${person.name} ${person.age}`)

console.log(newPeople);

! find ---------------------------------

---первый парамет это итеруемый обект
const findPeople = people.find(person => person.name === 'Ibo')
console.log(findPeople);

const findI = people.findIndex(person => person.name === '')
{name: 'Ibo', lastName: 'Zokirov', age: 18, budget: 1200}
console.log(findI); // 11

! reduce ---------------------------------

---с reduce
---methods reduce берет всебя два параметра 
---первый из них это acc акамулатор
---второй из него это curr коррет value 
---0 это сумарный тип ледей 

const totalSum = people.reduce((acc, person) => acc += person.budget, 0)
acc изменяется при каждом итератцыи
console.log(totalSum); //30400


const newPeople = people
   .filter(person => person.budget > 1400)
   .map(person => {
      return {
         info: `${person.name} (${person.age})`,
         budget: person.budget
      }
   }).reduce((acc, person) => acc + person.budget, 0)

console.log(newPeople);

! log----reduce-----20250
! log----0:{info: 'Ali (25)', budget: 1500}
! log----1:{info: 'Murod (30)', budget: 1800}
! log----2:{info: 'Lola (27)', budget: 1600}
! log----3:{info: 'Malika (28)', budget: 1700}
*/

