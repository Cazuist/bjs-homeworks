'use strict';

//задание 1
class Weapon {  
  constructor(obj) {    
    this.name = obj.name;
    this.attack = obj.attack;
    this.durability = obj.durability;
    this.range = obj.range;
    this.startDurability = this.durability;
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

    if (this.durability != Infinity && this.durability <= 0.3 * this.startDurability ) {
      return this.attack / 2;
    } else {
      return this.attack
    }
  }  

  isBroken() {
    return this.durability === 0;
  }  
}

const weaponList = {
  'Arm': {name: 'Рука', attack: 1, durability: Infinity, range: 1},
  'Bow': {name: 'Лук', attack: 10, durability: 200, range: 3},
  'Sword': {name: 'Меч', attack: 25, durability: 500, range: 1},
  'Knife': {name: 'Нож', attack: 5, durability: 300, range: 1},
  'Staff': {name: 'Посох', attack: 8, durability: 300, range: 2},
  'LongBow': {name: 'Длинный лук', attack: 15, durability: 200, range: 4},
  'Axe': {name: 'Секира', attack: 27, durability: 800, range: 1},
  'StormStaff': {name: 'Посох Бури', attack: 10, durability: 300, range: 3},
}

//проверка различных условий

const arm = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});
const bow = new Weapon(weaponList['Bow']);
const sword = new Weapon(weaponList['Sword']);
const knife = new Weapon(weaponList['Knife']);
const staff = new Weapon(weaponList['Staff']);
const longBow = new Weapon(weaponList['LongBow']);
const axe = new Weapon(weaponList['Axe']);
const stormStaff = new Weapon(weaponList['StormStaff']);

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
    super(weaponList['Arm']);
  } 
}

class Bow extends Weapon { 
  constructor() {
    super(weaponList['Bow']);
  } 
}

class Sword extends Weapon { 
  constructor() {
    super(weaponList['Sword']);
  } 
}

class Knife extends Weapon {
  constructor() {
    super(weaponList['Knife']);
  } 
}

class Staff extends Weapon {
  constructor() {
    super(weaponList['Staff']);
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
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjectList = {};
  }

  getName() {
    return this.name;
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
const student1 = new StudentLog('Иван Петров');

student1.addGrade(4, 'algebra');
student1.addGrade(3, 'algebra');
student1.addGrade(2, 'algebra');
student1.addGrade(4, 'math');
student1.addGrade(5, 'math');
student1.addGrade(4, 'geometry');
console.log(student1.addGrade(6, 'geometry'));
console.log(student1);

console.log(student1.getTotalAverage());