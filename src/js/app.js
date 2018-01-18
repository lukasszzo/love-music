//o importach i exportach nauczycie sie na kolejnym
//module. Ogólnie - w jednym pliku exportujecie to co chcecie
//w drugim importujecie. Dzialajacy w tle webpack
//to wszystko polaczy w calosc


//wersja js - nieco trodniejsza, ale bez jquery
import {contactForm} from './contact-js.js'

//wersja jQuery - latwiejsza
//import {cotactForm} from './contact-jquery.js'

//nawigacja - po kliknieciu na link w menu przewijamy do danej sekcji
//dodatkowo przy scrollu dodawana jest klasa dla head
//ktory zmienia swoj wyglad
import {nav} from './scroll.js'
import {initMap} from './map.js';


//to trzeba bo inaczej google map nie zadziala
//sprawdz koniec linka z google map - tam jest odpalana
//funkcja. metoda taka zwie sie jsonp - wymyslili ja Polacy :)
//o co chodzi dokladnie? To obejscie CORS.
//A co to CORS? To na nastepnym module...
window.initMap = initMap;

//po zaladowaniu dokumentu odpalamy funkcje
document.addEventListener('DOMContentLoaded', function() {
    contactForm(); //formularz kontaktowy
    nav(); //po kliknieciu w nawigacje przewijaj do danej sekcji
})