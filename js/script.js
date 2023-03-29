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

// var lastScrollTop = 0;
//     navbar = document.getElementById("navbar")
// window.addEventListener("scroll",function(){
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop){
//         navbar.style.top="-80px";
//     } else {
//         navbar.style.top="0";

//     }
//     lastScrollTop = scrollTop;
// })
let scrollAwal = window.pageYOffset

window.onscroll = function () {
    const navbar = document.querySelector('#navbar')
    let scrollAkhir = window.pageYOffset
    // console.log("sroll awal: " + scrollAwal)
    // console.log("sroll akhir: " +scrollAkhir)

    if (scrollAwal > scrollAkhir) {
        navbar.classList.remove('hide-navbar');
        // if (window.pageYOffset > 0) {
        // //   navbar.classList.add('border-b-2');
        // } else {
        //   navbar.classList.remove('border-b-2');
        // }
      } else {
        navbar.classList.add('hide-navbar');
      }
    
      scrollAwal = scrollAkhir
}
