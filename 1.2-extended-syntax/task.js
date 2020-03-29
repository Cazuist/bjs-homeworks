function getResult(a, b, c){
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let roots = [];

  if (discriminant === 0) {
  	roots.push(-b / 2 * a);
  } else if (discriminant > 0) {
    roots.push( (-b + Math.pow(discriminant, 0.5)) / 2 * a);
    roots.push( (-b - Math.pow(discriminant, 0.5)) / 2 * a);
  }

  return roots; 
}

function getAverageMark(marks){
  let averageMark = 0;
  let sum = 0;
  let newList = marks.slice(0, 5);

  if (marks.length > 0) {
    for (let mark of newList) {
      sum += mark;
      averageMark = (sum / newList.length);
    }
  } else if (marks.length > 5) {
    console.log('Получено больше 5 оценок!');
  }

  return averageMark;
}

function askDrink(name, dateOfBirthday){
  let today = new Date();
  let age = today.getFullYear() - dateOfBirthday.getFullYear();


  return (age > 18) ? `Не желаете ли олд-фэшн, ${name}?` : 
        `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}