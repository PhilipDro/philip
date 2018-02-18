$(function() {
  var bricklayer, currentYear;
  if ($('.bricklayer').length > 0) {
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
  }
  currentYear = new Date().getFullYear();
  return $('#copyright').append(currentYear);
});

// alert "currentYear"
