document.addEventListener('DOMContentLoaded', function() {
  var flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(function(flipCard) {
    flipCard.addEventListener('click', function() {
      flipCard.classList.toggle('flipped');
    });
  });
});
