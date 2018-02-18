
$ ->
  if $('.bricklayer').length > 0
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

  currentYear = new Date().getFullYear()
  $('#copyright').append(currentYear)
  # alert "currentYear"
