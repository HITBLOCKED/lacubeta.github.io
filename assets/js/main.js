/*=============== Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== Menu a mostrar =====*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== Menu oculto =====*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Eliminar menu por web movil y aparecer de una mejor manera ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos click en cada enlace de navegación, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Mediante estos codigos se cambia el titulo de fondo ===============*/
function scrollHeader(){
    const header = document.getElementById('header') 
    // Cuando el desplazamiento llega a una altura mayor de 50 de la ventana grafica 50 de altura de ventana gráfica, 
    // se le agregara un de desplazamiento a la etiqueta del encabezado
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Libreria swiper ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== Nuevo swiper ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Libreria swiper ===============*/
let newSwiper = new Swiper(".new-swiper", {
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });

/*=============== Esta es la seccion de desplazamiento ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== Aqui hace que se muestre la opcion de desplazarse hacia arriba ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== Icono de carrito en cada producto que esta enlazado a una pagina web ===============*/


/*=============== Tema negro ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema seleccionado (si en tal caso el usuario lo selecciono)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Se obtiene el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Aqui se validara si el usuario selecciono un tema
if (selectedTheme) {
  // En el caso que se cumpla, se activara o desactivara el tema oscuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Aqui se podra activar/desactivar el tema mediante un boton
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== Productos de filtro ===============*/
let list = document.querySelectorAll('.products__category');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "todos"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

/*=============== Buscador de productos ===============*/
// profesora aqui no se le implemento toda la funcion del buscador, la cual es enviar a cada 
// boton de licores segun ingresado en el buscador debido que al intentar programarlo no 
// logre implementarlo, debido a eso no esta agregado, mas que solo mandar a la parte superior 
// de la pagina. 
function search(){
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeitems = document.getElementById('products__container')
    const product = document.querySelectorAll('.products__card')
    const pname = storeitems.getElementsByTagName('h2')

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else {
                product[i].style.display = "none";
            }
        }
    }
}

