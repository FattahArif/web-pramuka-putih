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

const gambar1 = document.querySelector('#gambar-event1')
const content1 = document.querySelector('#judul-event1')
const gambar2 = document.querySelector('#gambar-event2')
const content2 = document.querySelector('#judul-event2')
const gambar3 = document.querySelector('#gambar-event3')
const content3 = document.querySelector('#judul-event3')


gambar1.onmouseenter = function() {
    content1.classList.remove('hilang')
}

gambar1.onmouseleave = function () {
    content1.classList.add('hilang')
}

content1.onmouseenter = function() {
    content1.classList.remove('hilang')
}

content1.onmouseleave = function () {
    content1.classList.add('hilang')
}

gambar2.onmouseenter = function() {
    content2.classList.remove('hilang')
}

gambar2.onmouseleave = function () {
    content2.classList.add('hilang')
}

content2.onmouseenter = function() {
    content2.classList.remove('hilang')
}

content2.onmouseleave = function () {
    content2.classList.add('hilang')
}

gambar3.onmouseenter = function() {
    content3.classList.remove('hilang')
}

gambar3.onmouseleave = function () {
    content3.classList.add('hilang')
}

content3.onmouseenter = function() {
    content3.classList.remove('hilang')
}

content3.onmouseleave = function () {
    content3.classList.add('hilang')
}

