
$ ->
  if $('.bricklayer').length > 0
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

  currentYear = new Date().getFullYear()
  $('#copyright').append(currentYear)

  # Add smooth scrolling to all links
  $("a").on('click', (event) ->

    if this.hash != ""
      event.preventDefault()

      hash = this.hash
      # alert hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, ->
        window.location.hash = hash)
      )
