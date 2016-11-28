(function(){

"use strict";

  var answers = [];
  document.querySelectorAll(".quiz-container .question[data-answer]").forEach(function(input) {
    answers.push(input.dataset["answer"]);
  });

  console.log(answers)
  var quiz = new Quiz('quiz-container', answers);

}());