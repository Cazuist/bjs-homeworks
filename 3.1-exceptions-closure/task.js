'use strict';
//задание 1
function parseCount (inputData) {
  const parsedData = Number.parseInt(inputData);
  if ( isNaN(parsedData) ) {
    throw new Error('Невалидное значение');
  }
  return parsedData;  
}

function validateCount(inputData) {
  try {
    return parseCount(inputData);
  } catch(err) {
    return err;
  }
}

//задание 2
class Triangle {
  constructor (a, b, c) {
    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt( p * (p - this.a) * (p -this.b) * (p - this.c) );
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    return {
      getArea() {
        return 'Ошибка! Неправильный треугольник';
      },

      getPerimeter() {
        return 'Ошибка! Неправильный треугольник';
      }
    }
  }  
}