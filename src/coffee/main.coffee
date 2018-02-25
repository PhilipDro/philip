
$ ->
  # initialize bricklayer for image layout
  if $('.bricklayer').length > 0
    bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

  # get current year
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

  # initialize lazy load lozad
  if $('.lozad').length > 0
    observer = lozad('.lozad', {
      load: (el) ->
        el.src = el.dataset.src
        el.onload = ->
          el.classList.add('fade')
    }).observe()
