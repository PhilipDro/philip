$(function() {
  var bricklayer, currentYear, observer;
  // initialize bricklayer for image layout
  if ($('.bricklayer').length > 0) {
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
  }
  // get current year
  currentYear = new Date().getFullYear();
  $('#copyright').append(currentYear);
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    var hash;
    if (this.hash !== "") {
      event.preventDefault();
      hash = this.hash;
      // alert hash
      return $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function() {
        return window.location.hash = hash;
      });
    }
  });
  // initialize lazy load lozad
  if ($('.lozad').length > 0) {
    return observer = lozad('.lozad', {
      load: function(el) {
        el.src = el.dataset.src;
        return el.onload = function() {
          return el.classList.add('fade');
        };
      }
    }).observe();
  }
});
