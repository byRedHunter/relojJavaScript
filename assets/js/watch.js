// variables para llamar a los elementos html
let $date = document.querySelector('.date')
let $watch = document.querySelector('.watch')

// array para los nombres de los meses y dias
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];

// funcion para mostrar la fecha
function showDate(today, months, days) {
    // nombre del dia
    let nameDay = days[today.getDay()]
    // el dia
    let day = today.getDate()
    // nombre del mes
    let nameMonth = months[today.getMonth()]
    // el año
    let year = today.getFullYear()

    // retornamos la fecha
    return `${nameDay} ${day} de ${nameMonth} del ${year}`
}

// funcion para añadir un cero delante de un nuremo
function addZero(num) {
    // verificamos si un numero es menor a 10
    if(num < 10) {
        // añadimos el cero
        num = "0" + num
    }

    // retornamos el numero
    return num
}

// funcion para correr la hora
function startTime() {
    // constante para obtener la fecha del sistema
    const today = new Date()
    // llamamos a la funcion para mostrar la fecha y la mostramos
    $date.innerText = showDate(today, months, days)

    // creamos tres variables para la hora, minuto y segundo
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    // variable etiqueta para el AM o PM
    let etiqueta = (hours < 12) ? "<span>AM</span>" : "<span>PM</span>"
    // ya que sera un reloj co un formato de 12 horas
    // si la hora es igual a cero sera 12 sino la misma hora continua
    hours = (hours == 0) ? 12 : hours
    // si es mayor a 12 le restamos 12
    hours = (hours > 12) ? hours - 12 : hours

    // a las horas, minutos y segundos le añadimos el cero
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    // mostramos la hora
    $watch.innerHTML = `${hours} : ${minutes} : ${seconds} ${etiqueta}`

    // llamamos a un setTimeout para llamar a la funcion despues de 1 segundo y asi correra nuestro reloj
    setTimeout(function() {
        startTime()
    }, 1000)
}

/* window.onload = function() {
    startTime()
}; */

// llamamos a la funcion para comenzar a correr la hora
startTime()