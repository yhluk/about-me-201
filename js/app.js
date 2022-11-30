'use strict';
let userName = prompt('Who are you stranger?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);
console.log("user name=" + userName);

let qOne = prompt('Was I born before 2000').toLowerCase();
if (qOne === 'yes' || qOne === 'y') {
  alert('Correct');
} else if (qOne === 'no' || qOne === 'n') {
  alert('Sorry, but No');
}
console.log('question1 =' + qOne);


let qTwo = prompt('Do I like wrestling?').toLowerCase();
if (qTwo === 'yes' || qTwo === 'y') {
  alert('Correct');
} else if (qTwo === 'no' || qTwo === 'n') {
  alert('Sorry, but No');
}
console.log('question1 =' + qTwo);

let qThree = prompt('Was I born in Peru').toLowerCase();
if (qThree === 'yes' || qThree === 'y') {
  alert('Correct');
} else if (qThree === 'no' || qThree === 'n') {
  alert('Sorry, but No');
}
console.log('question1 =' + qThree);

let qFour = prompt('Did I ever play soccer').toLowerCase();
if (qFour === 'yes' || qFour === 'y') {
  alert('Correct');
} else if (qFour === 'no' || qFour === 'n') {
  alert('Sorry, but No');
}
console.log('question1 =' + qFour);

let qFive = prompt('Am I trying to stay in shape?').toLowerCase();
if (qFive === 'yes' || qFive === 'y') {
  alert('Correct');
} else if (qFive === 'no' || qFive === 'n') {
  alert('Sorry, but No');
}
console.log('question1 =' + qFive);

alert(`Thanks ${userName} this survey was extremley fun`);


