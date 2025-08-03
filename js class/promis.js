// промисы позволяют обрабатывать отложенные во времени события
// промис - это обещание
// предоставить результат позже
// ! --------------------------------------------
// ТАКЖЕ ПРОМИСЬ МОЖЕТ ВЕРНУТЬ ОШИБКУ ЕСЛИ РЕЗУЛЬТАТ
// ПРЕДОСТАВИТЬ НЕВОЗМОЖНО

const { error } = require("console")
const { resolve } = require("path")
const { json } = require("stream/consumers")

//? У ПРОМИСА ЕСТЬ СОСТОЯНИЕ
//? КОГДА ПРОМИС ТОЛЬКО СОЗДАЛСЯ У НЕГО БУДЕТ
//! STATUS 1 : PANDDIG ... || ОЖИДАНИЕ ...
//? когда промиC вернул какойто резулт то он будет
//! STATUS 2 : COMPLETED.  || ИСПОЛНЕН. || FULFILLED
//? КОГДА ПРОМИC ОТКЛОНЕН ТО ОН
//! STATUS 3 : REJECTED.   || ОТКЛОНЕН.
// ! ----------------------------------------------
// ЧТО НА САМОМ ДЕЛЕ ПРОМИС , ОН OBJECT
// СОЗДАНИЕ ПРОМИСА

/*
const myPromise = new Promise((resolve, reject) => {
   ! then catch || orniga ||  try catch boladi
   try {
      ! resolve bosa
   } catch (error) {
      ! reject
   }
   ! -------------------------------------------
   ! получение результата проми
   myPromise
      .then(value => {
         ! resolve bosa ishlidi agar hammasi yaxshi bosa ishlidi
      })
      .catch(error => {
         ! reject bosa ishlidi
         ! qachonki qanaqadir hatoli bosa catch ga tushadi
      })
})
*/

// ? -------------------------------------------
// ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ FETCH API
/*
fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => response.json())
   .then(json => console.log(json))
   .then(e => console.error(e))
? --------------------------------------------
! В CONSOLE БРАУЗЕРА
! КОГДА БЫЛ ВЫЗВОН ТО ЕГО СОСТОЯНИЕ PANDING ОЖИДАНИЕ
! fetch('https://jsonplaceholder.typicode.com/todos')
! Promise {<pending>}

fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => {
      console.log(response);
      return response.json()
   })
      .then(json => console.log(json))
      .catch(error => console.error(error))
! в логе предут несколько обектов
? -----------------------------------------------
! utility ------------------------------------
const getData = (url) => {
   return new Promise((res, rej) => {
      fetch(url)
      .then(response => response.json())
      .then(json => res(json))
      .catch(error => rej(error))
   })
}
getData('https://jsonplaceholder.typicode.com/todos?_page=1&&_limit=5')
   .then(data => console.log(data))
   .catch(error => console.log(error.message))
*/
// ? ----------------------------------------
// ASYNC / AWAIT ----------------------------

//  это специальный синтаксис
// для упрощения
// работы с промисами

// АСИНХРОННАЯ ФУЕКЦИЯ 
/* 

async function asyncFN() {
   ! всегда возрашает промис 
}

const asyncFN = async () => {
   ! всегда возвращает промис
}

const asyncFN = async () => {
   return 'success!'
}
asyncFN()


const asyncFN = async () => {
   return 'success!'
}

asyncFN()
   .then(value => console.log(value))
! log success !

const asyncFN = async () => {
   throw new Error('there was an error !')
}

asyncFN()
   .then(value => console.log(value))
   .catch(error => console.log(error.message))
log there was an error

await --------==========================

?-----------------------------------------------------------

const timerPromise = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000)
   });
}

! await ожидает результат промис
! const asyncFN = async () => {
!    console.log('Timer starts');
!    await timerPromise();
!    console.log('Timer ended');
! }


const asyncFN = async () => {
   ! для отслежения начала
   const startTime = performance.now()
   console.log('Timer starts');
   ! здесь мо ожыдаем исполнения 
   await timerPromise();
   ! для отслежения контца 
   const endTime = performance.now()
   console.log('Timer ended', endTime - startTime);
}

! log 
! Timer starts
! end time random
! Timer ended 1014.7999999988824
asyncFN();

*/

// ? ---------------------------------------------
// ПЕРЕХОД С ПРОМИСОВ НА ASYNC / AWAIT
// ! with then / catch ----------------------------------------------
// const getData = (url) =>
//    new Promise((resolve, reject) =>
//       fetch(url)
//          .then(response => response.json())
//          .then(json => resolve(json))
//          .catch(error => reject(error))
//    )

// getData('https://jsonplaceholder.typicode.com/todos?_page=1&&_limit=5')
//    .then(data => console.log(data))
//    .catch(error => console.log(error.message))

// ! with async / await ----------------------------------------------

const getData = async (url) => {
   const res = await fetch(url)
   const json = await res.json()
   return json
}

const url = 'https://jsonplaceholder.typicode.com/todos?_page=1&&_limit=5'

try {
   const data = await getData(url)
   console.log(data);
} catch (error) {
   console.log(error.message)
}

// ГЛАВНОЕ В ASYNC / AWAIT 
// 1 | ASYNC / AWAIT ЭТО СИТАКСИЧЕСКАЯ НАДСТРОЙКА НАД ПРОМИСАМИ 

// 2 | AWAIT СИНТАКСИС ВОЗМОЖЕН ТОЬКО ВНУТРИ ASYNC ФУКЦИЙ

// 3 | ASYNC ФУНКЦИЯ ВСЕГДА ВОЗВРАЩАЕТ PROMISE 

// 4 | ASYNC ФУНКЦИЯ ОЖИДАЕТ РЕЗУЛЬТАТ ИНСТРУКЦИИ
//   | AWAIT И НЕ ВЫПОЛНЯЕТ ПОСЛЕДУЮЩИЕ ИНСТРУКЦИИ
