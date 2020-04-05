'use strict';

//задание 1
class Weapon {  
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.damaged = 0;
  }

  takeDamage(damage) {    
    if (this.durability >= damage) {
      this.durability -= damage;
      this.damaged += damage;
    } else {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    }

    if (this.durability != Infinity && this.damaged >= 0.7 * this.durability) {
      return this.attack / 2;
    } else {
      return this.attack
    }
  }  

  isBroken() {
    return this.durability === 0;
  }  
}

    //проверка различных условий
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 1);
const stormStaff = new Weapon('Посох Бури', 10, 300, 3);

arm.takeDamage(20);
console.log(arm.durability);
console.log(arm.getDamage());

bow.takeDamage(100);
console.log(bow.durability);
console.log( bow.getDamage() );
console.log( bow.isBroken() );
bow.takeDamage(50);
console.log(bow.durability);
console.log( bow.getDamage() );

sword.takeDamage(500);
console.log(sword.durability);
console.log( sword.isBroken() );

knife.takeDamage(400);
console.log(knife.durability);
console.log( knife.isBroken() );

//задание 2
class Arm extends Weapon {
  constructor() {
    super();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  } 
}

class Bow extends Weapon { 
  constructor() {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Sword extends Weapon { 
  constructor() {
    super();
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;   
  }
}

class Knife extends Weapon {
  constructor() {
    super();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;  
  } 
}

class Staff extends Weapon {
  constructor() {
    super();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;   
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;    
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const arm1 = new Arm();
console.log(arm1);
const bow1 = new Bow();
console.log(bow1);
const knife1 = new Knife();
console.log(knife1);
const sword1 = new Sword();
console.log(sword1);
const staff1 = new Staff();
console.log(staff1);

const longBow1 = new LongBow();
console.log(longBow1);
const axe1 = new Axe();
console.log(axe1);
const stormStaff1 = new StormStaff();
console.log(stormStaff1);

//задание 3
class studentLog {
  constructor(name) {
    this.name = name;
    this.subjectList = {};
  }

  getName() {
    console.log(this.name);
  }

  addGrade(grade, subject) {
    if (isNaN(grade) || grade > 5 || grade < 1) {
      console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
    } else {      
      if (!this.subjectList[subject]) {
        this.subjectList[subject] = [];        
      }
      this.subjectList[subject].push(grade);  
    }   
    
    return this.subjectList[subject] ? this.subjectList[subject].length : 0;
  }

  getAverageBySubject(subject) {
    if(!this.subjectList[subject] || !this.subjectList[subject].length) {
      return 0;
    }

    return getAverageFromArray(this.subjectList[subject]);
  }

  getTotalAverage() {
    const totalMarks = Object.values(this.subjectList);
    let totalSum = 0;
    let marksAmount = 0;
    for (let marks of totalMarks) {
      totalSum += getSumFromArray(marks);
      marksAmount += marks.length;
    }

    return +(totalSum / marksAmount).toFixed(2);
  }
}

//вспомогательные функции
function getSumFromArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

function getAverageFromArray(arr) {
  return +(getSumFromArray(arr) / arr.length).toFixed(2);
}

//проверка условий 
const student1 = new studentLog('Иван Петров');

student1.addGrade(4, 'algebra');
student1.addGrade(3, 'algebra');
student1.addGrade(2, 'algebra');
student1.addGrade(4, 'math');
student1.addGrade(5, 'math');
student1.addGrade(4, 'geometry');
console.log(student1.addGrade(6, 'geometry'));
console.log(student1);

console.log(student1.getTotalAverage());