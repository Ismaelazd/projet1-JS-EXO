function exo7() {

    let div = document.getElementById('div7')
    let todo = document.getElementById('todo')
    let toutes =document.querySelectorAll('#inputs7 input')[0]
    let completees =document.querySelectorAll('#inputs7 input')[1]
    let aFaire =document.querySelectorAll('#inputs7 input')[2]
    let div71;
    let p;
    let checkbox;
    let span;
    let close;
    let hr;
    let tabClose= [];
    let tabCheck= [];

    function createElem() {
        div71 = document.createElement('div')
        p = document.createElement('p')
        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        span = document.createElement('span')
        close = document.createTextNode("\u00D7");
        hr = document.createElement('hr')
    }

    function addElem() {
        span.appendChild(close)
        p.innerText = todo.value
        div71.appendChild(checkbox)
        p.appendChild(hr)
        div71.appendChild(p)
        tabClose.push(span)
        div71.appendChild(span)
        div71.classList.add('div71')
        tabCheck.push(div71)
        div.appendChild(div71)
       
    }

    function deleteElem(){
    
        tabClose.forEach(elem =>{
            elem.onclick = function (){
                let div = this.parentElement
                div.remove()
            }
        })
    }

    function colorCheck(){
        tabCheck.forEach(elem =>{
            console.log(elem.parentElement);
            
            if(elem.children[0].checked){
                elem.style.backgroundColor = 'green'
    
            }else{
                elem.style.backgroundColor = ''

            }
    
        })
    }

    todo.addEventListener('focus', () => {
        document.addEventListener('keypress', event => {

            if (event.key == 'Enter' && todo.value != '') {
                createElem()
                addElem()
                deleteElem()
                console.log(toutes);
                console.log(completees);
                console.log(aFaire);
                
                todo.value = ''
                console.log(tabCheck[0]);
                
            }
        })
        
    
    })


    div.addEventListener('click',colorCheck)
    
    
    toutes.addEventListener('click', ()=>{
        tabCheck.forEach(element=>{
                element.style.display = 'flex'
        })
    })
    completees.addEventListener('click', ()=>{
        tabCheck.forEach(element=>{
            if(element.children[0].checked){
                element.style.display = 'flex'
            }else{
                element.style.display = 'none'
            }
        })
    })
    aFaire.addEventListener('click', ()=>{
        tabCheck.forEach(element=>{
            if(element.children[0].checked){
                element.style.display = 'none'
            }else{
                element.style.display = 'flex'
            }
        })
    })
   
    

    

}
export {
    exo7
}