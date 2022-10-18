// TYPED
var typed = new Typed('.typed', {
  strings: ["Passionné par l univers du web depuis quelques années, <br>j'aime à coder de manière structurée et de façon résponsive.", 
  "Mes forces : <br>La création de sites web et d'applications en m'aidant de <br><strong>langages de programmation</strong> <br>divers et variés", 
  "La recette d'un site réussi : <br>Satisfaire les besoins client et laisser libre cours à <br>la <strong>créativité</strong> et à <br><strong>l'imagination</strong> pour créer quelque chose d'unique"],
  typeSpeed: 50,
  backDelay:3000,
  backspeed: 20,
  loop: true
});

//Compteur 
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
       countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 8000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}
//----------  AOS  -----------//

AOS.init();

