document.addEventListener('DOMContentLoaded', function(){

"use strict";

  var answers = [];
  document.querySelectorAll(".quiz-container .question[data-answer]").forEach(function(input) {
    answers.push(input.dataset["answer"]);
  });

  var quiz = new Quiz('quiz-container', answers),
      button = document.querySelector(".quiz-container button");

  function checkAnswers(){
    quiz.checkAnswers(false);
    var modal = document.querySelector(".quiz-results"),
        score = quiz.result.score;

    var html = "<h3>You got " + score + " out of " + answers.length + " correct!</h3>" +
        '<p>If you liked this, you won&rsquo;t want to miss my cheat sheet for pairing fonts! ' +
        'Type your email below to get the cheat sheet and more goodies just like it delivered straight to your inbox.</p>' +
        '<form action="//typeburrito.us12.list-manage.com/subscribe/post?u=fd0a52a22d00801e99e8e1e03&amp;id=c146058452"' +
        'method="post"' +
        'id="newsletter-form"' +
        'name="mc-embedded-subscribe-form"' +
        'target="_blank"' +
        'novalidate>' +
        '<input type="email" value="" name="EMAIL" class="email" id="newsletter-email" placeholder="email address">' +
        '<input type="submit" value="Get the Cheat Sheet!" name="subscribe" id="newsletter-subscribe" class="button">' +
        '</form>';

    modal.querySelector(".inner-modal").innerHTML = html;
    modal.classList.add("cta");
    modal.classList.add("active");
  }

  button.addEventListener('click', checkAnswers);

  document.addEventListener('click', function(e){
    var modal = document.querySelector(".quiz-results");
    if (e.target === modal) {
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    }
  });

});
