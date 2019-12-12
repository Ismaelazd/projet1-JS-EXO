import {exo1} from '../../src/js/ex1.js';
import {exo2} from '../../src/js/ex2.js';
import {exo3} from '../../src/js/ex3.js';
import {exo4} from '../../src/js/ex4.js';
import {exo5} from '../../src/js/ex5.js';
import {exo6} from '../../src/js/ex6.js';
import {exo7} from '../../src/js/ex7.js';

let liens = document.querySelectorAll('.ul1 a')
let sections = document.querySelectorAll('section')
let tabExo = [exo1(),exo2(),exo3(),exo4(),exo5(),exo6(),exo7()]
let map =[]
for (let i = 0; i < sections.length; i++) {
    map.push({
        lien: liens[i],
        exo: sections[i],
        fct: tabExo[i]
    });

    if(i != 0){
        sections[i].style.display='none'
    }
    
}

map.forEach(e => {
    e.lien.addEventListener('click', () => {
        console.log(e);
        
        map.forEach(a => {
            a.lien.classList.replace('text-white', 'text-primary');
            a.lien.classList.replace('bg-primary', 'bg-white');
            a.exo.style.display = 'none';
            a.fct
        });

        e.lien.classList.replace('text-primary', 'text-white');
        e.lien.classList.replace('bg-white', 'bg-primary');
        e.exo.style.display = 'block';
  });
});





