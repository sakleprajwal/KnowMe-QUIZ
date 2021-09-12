const readline = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.black.bgMagenta('-------------------------------------\n------- WhoKnowsMeBetter QUIZ--------\n-------------------------------------'));
var score = 0;
var queAnsArray = [
  { question: "What is my name?", answer: "Prajwal" },
  { question: "What is my age?", answer: "23" },
  { question: "What is my TRUE brith year?", answer: "1999" },
  { question: "Where do I work?", answer: "TCS" },
  { question: "Which netflix web-series I like the most?", answer: "Friends" },
  { question: "What is my favourite sport?", answer: "Cricket" },
  { question: "Which one is my favourite IPL team?", answer: "KKR" }
];
console.log("\n");
console.log("Enter your nick name ");
var username = readline.question('');
console.log("Hello "+username+"!! Let's start the QUIZ\n")
for (var x = 0; x < queAnsArray.length; x++) {
  console.log(chalk.black.bgCyan(" " + queAnsArray[x].question + " "))
  var answer = readline.question('');
  if (answer.toUpperCase() === queAnsArray[x].answer.toUpperCase()) {
    console.log(chalk.green('Correct Answer!!'));
    score = score + 1
  }
  else {
    console.log(chalk.red('Wrong Answer!!'));
  }
  console.log("\n");
}

console.log(chalk.black.bgYellow("-------------------------------\n Your final score : " + chalk.black.bgWhite(score) + " Out of " + chalk.black.bgWhite('7') + " \n-------------------------------"));