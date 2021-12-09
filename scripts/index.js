window.onload = function () {
   $('.openMenu').click(function (e) {
      e.preventDefault();
      $(".overlay").addClass('overlay__open');
   });

   $('.overlay__menu-close').click(function (e) {
      e.preventDefault();
      $(".overlay").removeClass('overlay__open');
   });
};