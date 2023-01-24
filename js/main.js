const load = document.querySelector('.loadermain')
window.addEventListener("load", function(){
    load.style.display = 'none'
})
mybutton = document.querySelector('#scrollTopBtn')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}