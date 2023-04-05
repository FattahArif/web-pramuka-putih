let scrollAwal = window.pageYOffset

window.onscroll = function () {
    const navbar = document.querySelector('#navbar')
    let scrollAkhir = window.pageYOffset

    if (scrollAwal > scrollAkhir) {
        navbar.classList.remove('hide-navbar');
      } else {
        navbar.classList.add('hide-navbar');
      }
    
      scrollAwal = scrollAkhir
}