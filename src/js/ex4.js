

function exo4(){

let mesDivs = document.getElementsByClassName('block41')
let btn =  document.getElementById('input1Ex4')
let nbClick = document.getElementById('nbClick')
let cpt = 0
btn.addEventListener('click',event =>{
    cpt++
    mesDivs[0].children[0].classList.toggle('petitBlok')
    mesDivs[1].children[0].classList.toggle('petitBlok')

    nbClick.innerText = cpt
})

}
export {exo4};