const readline = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.black.bgRed('                                     \n        WhoKnowsMeBetter QUIZ        \n                                     '));
var score = 0;
var queAnsArray = [
  {question: "What is my name?", answer: "Prajwal"}, 
  {question: "Where do I live?", answer: "Hingoli"}, 
  {question: "Where do I work?", answer: "TCS"}, 
  {question: "What is my age?", answer: "23"}, 
  {question: "What is my middle name?", answer: "Hemant"}, 
  {question: "What is my favourite sport", answer: "Cricket"}, 
  {question: "What is my favourite IPL team?", answer: "KKR"}
];
console.log("\n");
for(var x=0; x<queAnsArray.length; x++){
  var answer = readline.question(chalk.black.bgCyan(queAnsArray[x].question));
  if(answer.toUpperCase() === queAnsArray[x].answer.toUpperCase())  {
    console.log(chalk.green('Correct Answer!!'));
    score = score+1
  }
  else{
    console.log(chalk.red('Wrong Answer!!'));
  }
  console.log("\n");
}

console.log(chalk.black.bgYellow("                               \n Your final score : "+ chalk.black.bgWhite(score) +" Out of "+ chalk.black.bgWhite('7')+" \n                               "));