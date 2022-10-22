// code to toggle display of menu on smaller screens
$('#nav-icon4 ').on("click", function(){
    $(this).toggleClass('open');
    $("ul").toggleClass("show");
    $(".nav-container-3").toggleClass("far-right");   
    
});
$("nav ul li ").on("click", function() {
    $("#nav-icon4").toggleClass('open');
    $("ul").toggleClass("show");
    $(".nav-container-3").toggleClass("far-right");
})
// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// code to animate phone icon to bounce every 5secs
phoneBounce = function () {
    $(".phone-icon").toggleClass("bounce2"); 
}
setInterval(phoneBounce, 5000);

// code to generate raandom quote onLoad
$(".flex-container-one p").ready(function () {
    categories = ["Let's flock together", "Lord of the Wings!", "Down the sides, Wing Attack!",
     "rather walk? or take these Wings!", "Explore flappy delights", "7, like playing on the Wings",
    "I don't need luck, I just Wing it", "I'm Asian, we are the Wings" ];       
    word = categories[Math.floor(Math.random() * categories.length)];    
    $(".flex-container-one p").html(word);
});

// swiper slider carousel
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 2,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

