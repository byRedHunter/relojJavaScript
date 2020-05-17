$date = document.querySelector('.date')
$watch = document.querySelector('.watch')

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const days = ['Domingo', 'Luner', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];

function showDate(today, months, days) {
    let nameDay = days[today.getDay()]
    let day = today.getDate()
    let nameMonth = months[today.getMonth()]
    let year = today.getFullYear()

    return `${nameDay} ${day} de ${nameMonth} del ${year}`
}

function addZero(num) {
    if(num < 10) {
        num = "0" + num
    }

    return num
}

function startTime() {
    const today = new Date()
    $date.innerText = showDate(today, months, days)

    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    etiqueta = (hours < 12) ? "<span>AM</span>" : "<span>PM</span>"
    hours = (hours == 0) ? 12 : hours
    hours = (hours > 12) ? hours - 12 : hours

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    $watch.innerHTML = `${hours} : ${minutes} : ${seconds} ${etiqueta}`

    setTimeout(function() {
        startTime()
    }, 1000)
}

window.onload = function() {
    startTime()
};