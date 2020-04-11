'use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    const findId = this.alarmCollection.find( (item) => item.id === id );
    if (!id) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не определен'); 
    }

    if (!findId) {
      this.alarmCollection.push({id, time, callback});
    } else {
      throw new Error('Будильник с таким id уже существует');
    }
  }

  removeClock(id) {
    const findId = this.alarmCollection.find( (item) => item.id === id );
    this.alarmCollection = this.alarmCollection.filter( (item) => item.id != id );
    return !findId ? false : true;
  }

  getCurrentFormattedTime() {
    const time = new Date();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();  
    return `${hours}:${minutes}`;
  }

  start() {
    const clock = this;
    function checkClock(call) {
      if (call.time === clock.getCurrentFormattedTime() ) {
        call.callback();        
      }      
    }
    
    if (!this.timerId) {
      this.timerId = setInterval ( () => {
        this.alarmCollection.forEach( (item) => checkClock(item) );        
      }, 5000);
    } 
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }    
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }

  printAlarms() {
    let message = `Печать всех звонков в количестве: ${this.alarmCollection.length}\n`;
    this.alarmCollection.forEach( (item, array) => message += `Будильник № ${item.id} заведен на ${item.time}\n` );
    console.log(message);
  }
}

function testCase() {
  const alarm = new AlarmClock();
  const call1 = () => console.log('Раз, два, Фредди заберет тебя!');
  const call2 = () => {
    console.log('Три, четыре, запирайте дверь в квартире!');
    alarm.removeClock(2)
    };
  const call3 = () => {
    console.log('Пять, шесть, Фредди всех вас хочет съесть!');
    alarm.stop();
    alarm.clearAlarms();
    alarm.printAlarms()
    };

  function timeFormatted(time) {
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(); 
    return `${hours}:${minutes}`;
  }

  const time1 = timeFormatted( new Date( Date.now() ) );
  const time2 = timeFormatted( new Date( Date.now() + 60000 ) );
  const time3 = timeFormatted( new Date( Date.now() + 120000 ) );

  alarm.addClock(time1, call1, 1);
  alarm.addClock(time2, call2, 2);
  //alarm.addClock(time3, call3); Выбрасывает ошибку отсутствия id в параметрах.
  //alarm.addClock(time3, call3, 2); Выбрасывает ошибку, что такой будильник существует
  alarm.addClock(time3, call3, 3);

  alarm.printAlarms();
  alarm.start();
};

testCase();