const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

function digitalClock(){
    let datefunction = new Date()
    let hours = datefunction.getHours()
    let minutes = datefunction.getMinutes()
    let seconds = datefunction.getSeconds()
    let timeFormat = 'AM'

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat
}
digitalClock()