'use strict';
let score = 0;
let myAge = '29';

let userName = prompt('Who are you stranger?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);
console.log('user name=' + userName);

function qOneFn()
{
  let qOne = prompt('Was I born before 2000').toLowerCase();
  if (qOne === 'yes' || qOne === 'y')
  {
    alert('Correct');
    score++;
  } else if (qOne === 'no' || qOne === 'n')
  {
    alert('Sorry, but No');
  }
}

function qTwoFn()
{
  let qTwo = prompt('Do I like wrestling?').toLowerCase();
  if (qTwo === 'yes' || qTwo === 'y')
  {
    alert('Correct');
    score++;
  } else if (qTwo === 'no' || qTwo === 'n')
  {
    alert('Sorry, but No');
  }
}

function qThreeFn()
{
  let qThree = prompt('Was I born in Peru').toLowerCase();
  if (qThree === 'yes' || qThree === 'y')
  {
    alert('NOO');
  } else if (qThree === 'no' || qThree === 'n') {
    alert('Good job');
    score++;
  }
}

function qFourFn()
{
  let qFour = prompt('Did I ever play soccer').toLowerCase();
  if (qFour === 'yes' || qFour === 'y') {
    alert('Correct');
    score++;
  } else if (qFour === 'no' || qFour === 'n') {
    alert('Sorry, but No');
  }
}

function qFiveFn()
{
  let qFive = prompt('Am I trying to stay in shape?').toLowerCase();
  if (qFive === 'yes' || qFive === 'y')
  {
    alert('Correct');
    score++;
  } else if (qFive === 'no' || qFive === 'n')
  {
    alert('Sorry, but No');
  }
}

function qSixFn()
{
  for (let i = 0; i < 4; i++) 
  {
    let qSix = prompt('How old do You think I am, you have 4 tries for this one');
    if (qSix === myAge)
    {
      alert('You`ve played this game before. Good Job I`m 29');
      score++;
      break;
    }
    else if (qSix > myAge)
    {
      alert('I`m not that old lol');
    }
    else if (qSix < myAge)
    {
      alert('I know that I look young, but I`m older than that');
    } if (i === 3) {
      alert(`My age is ${myAge}`);
    }
  }
}

function qSevenFn()
{
  let carArray = ['vw', 'ferrari', 'mersedes', 'bmw', 'audi', 'pagani'];

  for (let i = 0; i < 6; i++) {
    let qSeven = prompt('I got the last one for you. Name Car brand I might like').toLowerCase();

    if (carArray.indexOf(qSeven) !== -1) {
      alert('You are right');
      score++;
      break;
    }
    else {
      alert('Unfortunetly noooo');
    }
  }
  alert(`All possible answers were: ${carArray}`);
}


qOneFn();
qTwoFn();
qThreeFn();
qFourFn();
qFiveFn();
qSixFn();
qSevenFn();

alert(`Thanks ${userName} this survey was extremely fun you got ${score} correct answers`);
