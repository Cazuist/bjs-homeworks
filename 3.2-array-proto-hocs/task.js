'use strict';
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  return arr1.length != arr2.length ? false : arr1.every( (item, index) => item === arr2[index] );
}

function memorize(fn, limit) {
  let memory = [];
  return function(...arg) {    
    const equalArr = memory.find( (item) => compareArrays( item.arg, arg ) );
    const result = equalArr ? equalArr.result : fn(...arg);
    const message = equalArr ? `Результат функции '${fn.name}' c аргументами ${arg} взяты из памяти.` 
          : `Результат функции '${fn.name}' c аргументами ${arg} вычислены.` ;

    memory.push({arg, result});

    if (memory.length > limit) {
      memory.shift();
    }

    //console.log(message);
    return result;
  };
}

const it1 = memorize(sum, 3);
const dataList = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction, timerName) {
  console.time(timerName);
  let i = 0;
  while (i < 100) {
    dataList.forEach( (data) => testFunction(...data) );
    i++;
  }
  console.timeEnd(timerName);
}

//Бенчмаркинг
testCase(sum, 'Time-sum');

testCase(it1, 'Time-memorize');