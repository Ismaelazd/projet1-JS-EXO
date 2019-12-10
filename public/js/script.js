// Exercice 1

let liens = document.querySelectorAll('li')

liens.forEach(elem =>{
    elem.addEventListener('click',()=>{
        
    })
})

let titre = document.querySelector('h2')
let btn1 = document.querySelector('input')
btn1.addEventListener('click',()=>{
    titre.style.color= 'red'
    titre.style.backgroundColor = '#3b8eec'
    titre.innerText = 'Le texte a été modifié'
})

querySelectorAll('.ul1 li')