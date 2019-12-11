
function exo1(){
    let titre = document.querySelector('h2')
    let btn1 = document.querySelector('input')

    let cpt = 0
    
    
    
    btn1.addEventListener('click',()=>{
        cpt++
        if(cpt%2 == 1){
            titre.style.color= 'red'
            titre.style.backgroundColor = '#3b8eec'
            titre.innerText = 'Le titre a été modifié'
        }else{
            titre.style.color= 'black'
            titre.style.backgroundColor = ''
            titre.innerText = 'Le titre a modifier'
        }
        
    })
}

export {
    exo1
  
};