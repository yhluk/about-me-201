'use strict';
let userName = prompt('Who are you stranger?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

let qOne = prompt('Was I born before 2000').toLowerCase();
if(qOne === 'yes' || qOne === 'y'){
  alert('Correct');
} else if(qOne === 'no' || qOne === 'n'){
  alert('Sorry, but No');
  else("Didn't answer it correctly")

