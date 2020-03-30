'use strict';
//первое задание
function getSolutions(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;
  let roots = [];
  let x1;
  let x2;

  if (D === 0) {
    x1 = -b / 2 * a;
    roots.push(x1);
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D) ) / 2 * a;
    x2 = (-b - Math.sqrt(D) ) / 2 * a;
    roots.push(x1);
    roots.push(x2);
  }

  return {D, roots };
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x ${c < 0 ? '-' : '+'} ${Math.abs(c)}.`);
  console.log(`Значение дискриминанта: ${result.D}.`);

  switch(result.roots.length) {
    case 0:
      console.log(`Уравнение не имеет вещественных корней.`);
      break;
    case 1:
      console.log(`Уравнение имеет один корень: X₁ = ${result.roots[0]}.`);
      break;
    default:
      console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}.`);
      break;
  }
}

//второе задание
function getAverageMark(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }

  if (!marks.length) {
    return 0;
  }

  return sum / marks.length;
}

function getAverageScore(data) {
  const averageMarks = {};
  const averageMarksList = [];

  for (let subject in data) {
    averageMarks[subject] = getAverageMark(data[subject]);
    averageMarksList.push( getAverageMark(data[subject]) );
  }

  averageMarks.average = getAverageMark(averageMarksList);

  return averageMarks;
}

//третье задание
function getDecodedValue(secret) {
  return secret === 0 ? 'Родриго' : 'Эмильо';
}

function getPersonData(secretData) {
  let firstName = getDecodedValue(secretData['aaa']);
  let lastName = getDecodedValue(secretData['bbb']);

  return {firstName, lastName};
}