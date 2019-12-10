function exo3(){

    let h2 = document.getElementById('h2ex3')
    let input = document.querySelector('.inputEx3')
    let btn = document.querySelector('.btnEx3')
    
    btn.addEventListener('click', ()=>{
        h2.innerText = input.value
        input.value=""
    })

};

export {exo3};