$(function() {
  var bricklayer, currentYear;
  if ($('.bricklayer').length > 0) {
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
  }
  currentYear = new Date().getFullYear();
  $('#copyright').append(currentYear);
  // Add smooth scrolling to all links
  return $("a").on('click', function(event) {
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
});
