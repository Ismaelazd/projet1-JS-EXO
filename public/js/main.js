import {exo1} from '../../src/js/ex1.js';
import {exo2} from '../../src/js/ex2.js';
import {exo3} from '../../src/js/ex3.js';
import {exo4} from '../../src/js/ex4.js';
import {exo5} from '../../src/js/ex5.js';
import {exo6} from '../../src/js/ex6.js';

let liens = document.querySelectorAll('.ul1 li')

liens.forEach(elem => {

    elem.addEventListener('click', () => {

        for (let i = 0; i < liens.length; i++) {
            liens[i].classList.remove('class', 'acti')
            
        }
        elem.classList.add('acti')
        console.log(elem.className)

    })
})


exo3()
exo5()
exo6()
// function show(elementID) {
//     // try to find the requested page and alert if it's not found
//     var ele = document.getElementsByClassName(elementID)[0];//Exercic 1 
//     if (!ele) {
//         alert("no such element");
//         return;
//     }

//     // get all pages, loop through them and hide them
//     var pages = document.getElementsByClassName('page');
//     for(var i = 0; i < pages.length; i++) {
//         pages[i].style.display = 'none';
//     }

//     // then show the requested page
//     ele.style.display = 'block';
// }


