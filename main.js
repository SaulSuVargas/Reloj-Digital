// RELOJ
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

        // Añadimos la rotacion a los elementos deacorde ala hora
        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
        minutes.style.transform = `rotateZ(${mm}deg)`
        seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = is

/* RELOJ Y SUS DATOS*/
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

    // Cambiar formato de 12 o 24 horas
    if(hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    }

    else {
        ampm = 'AM'
    }

    // Detectamos cuando son las 0 AM y 12AM
    if(hh == 0) {
        hh = 12
    }

    // Mostrar un cero despues de las horas
    if(hh < 10){
        hh = `0${hh}`
    }

    // Mostrar tiempo
    textHour.innerHTML = `${hh}:`

    // Mostrar un cero despues de los minutos
    if(mm < 10) {
        mm = `0${mm}`
    }

    // Mostrar minutos
    textMinutes.innerHTML = mm

    // Mstrar AM O PM
    textAmPm.innerHTML = ampm

    // Obtener mes y año
    let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']

    // Mostrar el dia, mes y año
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s

/* ACTIVAR MODO OSCURO/CLARO*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Seleccionamos el tema dado
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el interfaz o tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// Validamos el tema seleccionado
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activamos/desactivamos el tema/icono
themeButton.addEventListener('click', () => {
    // Añadimos o removemos el icono/tema
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Guardamos el tema y el icono actual que eligió el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})