// что позволяют делять классы
// классы позволяют создовать прототипы для обектов
// на основвание прототипов создаются экземпляры
// экземпляры могут иметь собственные свойства и методы 
// токже экземпляры наследуют свойсто прототипов
// ? -------------------------------------------------

// на самом деле классы в JS это понятие 
// синтактической надстрока над 
// функтциями и над обектами
/* 
? экземпляры классы создаются вызовом функтции

? class это шаблон для создание экземпляра класса 

? в классе первое буква заглавное
class Comment {
   ? опционалный параметер
   constructor(text) {
      ? указывает на экземпляр
      this.text = text
      ? коструктор вызывается только когда создаются 
      ? новый экземпляр 
      ? у нового экземпляра votesQty 0 
      this.votesQty = 0
   }
   ? этот метод находится на уровне class 
   ? но он не будет преисвоен как отделный метод конкретного экземпляра
   ? он будет наследовотся всеми экземпляроми этого class обекта 
   upvote() {
      this.votesQty += 1
   }
}
? создание нового экземпляра
? "new" 
const firstComment = new Comment('First comment?')
console.log(firstComment);
? terminal log 
? Comment { text: 'First comment?', votesQty: 0 }
*/
// ? -------------------------------------------------------
// ? проверка на принадлежности  
/* 
class Comment {
   constructor(text) {
      this.text = text
      this.votesQty = 0
   }
   upvotes() {
      this.votesQty += 1
   }
}

const firstComment = new Comment('First comment')
? c помошью оператора instanceof можна проверит при нодлежность 
? экземпляру 
firstComment instanceof Comment // true
firstComment instanceof Object // true
! -----------------------------------
? можно даже вызы вать upovote()
! -----------------------------------
? при каждом вызове upvotes добовля ет +1
? в логе будет undefined но он добавит + 1 к votesQty
firstComment.upvotes()
console.log(firstComment.votesQty); // 1
firstComment.upvotes()
console.log(firstComment.votesQty); // 2 
*/

// ---------------------------------------
// ? проверка принадлежности свойств экземпляру обекта
/* 

class Comment {
   constructor(text) {
      this.text = text
      this.votesQty = 0
   }
   upvotes() {
      this.votesQty += 1
   }
}
? --------------------------------------------------
const firstComment = new Comment("First comment")
? мы проверяем естьли у обекта такое свойство
firstComment.hasOwnProperty('text')           // true  
firstComment.hasOwnProperty('votesQty')       // true

? false потомучто они не собственное свойство firstComment
firstComment.hasOwnProperty('upvote')         // false 
firstComment.hasOwnProperty('hasOwnProperty') // false
*/
// -------------------------------------------------
// ? СОЗДАНИЕ НЕСКОЛЬКИХ ЭКЗЕМПЛЯРОВ 
/* 

class Comment {
   constructor(text) {
      this.text = text
      this.votesQty = 0
   }
   upvotes() {
      this.votesQty += 1
   }
}

const firstComment = new Comment('first comment??')
const secondComment = new Comment('second comment??')
const thirdComment = new Comment('third comment??')
*/

// ? -----------------------------------------------------

// СТАТИЧЕСКИЕ МЕТОДЫ ====================================
/* 

class Comment {
   constructor(text) {
      this.text = text
      this.votesQty = 0
   }

   upvotes() {
      this.votesQty += 1
   }

   ? этот метод не наследуется
   static mergeComments(first, second) {
      ? log concantinatsia
      return `${first} ${second}`
   }
}

? МЕТОД ДОСТУПЕН КАК СВОЙСТВО КЛАССА И НЕ НАСЛЕДУЕТСЯ 
? ЭКЗЕМПЛЯРАМИ КЛАССА 
Comment.mergeComments('first comment ???', "second comment ???")
*/


// ? -----------------------------------------------------

// РАСШИРЕНИЕ ДРУГИХ КЛАССОВ -----------------------------

class NumbersArray extends Array {
   sum() {
      return this.reduce((el, acc) => acc += el, 0)
   }
}

const myArray = new NumbersArray(2, 5, 7)
// log ----------------------
// NumbersArray(3) [ 2, 5, 7 ]
// 14
console.log(myArray);
myArray.sum()
console.log(myArray.sum());