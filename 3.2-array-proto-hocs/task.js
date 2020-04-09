'use strict';
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  //sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    return arr1.every( (item, index) => item === arr2[index] );
  }
}

function memorize(fn, limit) {
  let memory = [];
  return function(...arg) {    
    if( memory.find( (item) => compareArrays( item.arg, arg ) ) ) {
      //console.log(`Значение работы функции '${fn.name}' взято из памяти.`);
    } else {
      //console.log(`Значение работы функции '${fn.name}' взято не из памяти.`);
    }
    memory.push({arg, result: fn(...arg)});
    if (memory.length > limit) {
      memory.shift();
    }
    return fn(...arg);
  };
}

const it1 = memorize(sum, 3);

it1(5, 2);
it1(5, 5);
it1(5, 2);

const results = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
console.log(results);

function testCase(testFunction, timerName) {
  console.time(timerName);
    let i = 0;
    while(i < 100) {
      results.forEach( (result) => testFunction(result));
      results
      i++;
    }
  console.timeEnd(timerName);
};
//Бенчмаркинг
testCase(sum, 'Time');
testCase(memorize(sum, 3), 'Time');
