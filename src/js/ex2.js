function exo2(){

let h2 = document.getElementById('h2ex2')
let input = document.querySelector('.inputEx2')
let btn = document.querySelector('.btnEx2')

btn.addEventListener('click', ()=>{
    h2.innerText = input.value
    input.value=""
})

}
export {exo2};