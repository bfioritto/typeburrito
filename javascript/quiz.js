document.addEventListener('DOMContentLoaded', function(){

"use strict";

  var answers = [];
  document.querySelectorAll(".quiz-container .question[data-answer]").forEach(function(input) {
    answers.push(input.dataset["answer"]);
  });

  var quiz = new Quiz('quiz-container', answers),
      button = document.querySelector(".quiz-container button");

  function checkAnswers(){
    if (quiz.checkAnswers(false)) {
      console.log(quiz.result.score)
    } else {
      console.log(quiz.result.score)
    }
  }
  console.log(button)
  button.addEventListener('click', checkAnswers);

});