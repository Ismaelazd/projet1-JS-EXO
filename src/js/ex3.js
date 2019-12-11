function exo3(){

    let span = document.querySelector('#h2ex3 span')
    let input = document.querySelector('.inputEx3')
    let btn = document.querySelector('.btnEx3')
    
    btn.addEventListener('click', ()=>{
        span.innerText = input.value
        input.value= ""
    })

};

export {exo3};