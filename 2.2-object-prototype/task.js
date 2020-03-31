//задание 1
function getAnimalSound(animal) {
  const sound = animal ? animal.sound : null;
  return sound;
}

//задание 2
function getAverageMark(marks) {
  let sum = 0;

  for (let mark of marks) {
    sum += +mark;
  }

  return Math.round( sum / marks.length ) || 0;
}

//задание 3
function isLeapYear(year) {
  return ( year % 400 === 0 || (year % 4 === 0 && year % 400 != 0) || year === 0 );
}

function checkBirthday(birthday) {
  const now = Date.now();
  const dayOfBirthday = ( new Date(birthday) ).getTime();

  const msInYear = 365 * 24 * 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;
  
  const ageMS = now - dayOfBirthday;
  const currentYear = ( new Date() ).getFullYear();
  const birthdayYear = ( new Date(birthday) ).getFullYear();
  let leapDays = 0;

  for (let i = birthdayYear; i < currentYear; i++) {
    if (isLeapYear(i)) {
      ++leapDays;
    }
  }  
  
  return  (ageMS - leapDays * msInDay) / msInYear > 18;
}