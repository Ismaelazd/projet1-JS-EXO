function exo5(){

let btn = document.getElementById('input1Ex5')
let btn2 = document.getElementById('input2Ex5')
let btn3 = document.getElementById('input3Ex5')
let div = document.getElementById('div5')
let tabOeuf = []
btn.addEventListener('click',()=>{
    let image = document.createElement('img')
    image.setAttribute('src','../../public/img/oeuf.png')
    image.style.height = '75px'
    tabOeuf.push(image)
    div.appendChild(image)
    console.log(tabOeuf.length);
    
})

btn2.addEventListener('click',()=>{
    let image = tabOeuf.pop()
    div.removeChild(image)
    console.log(tabOeuf.length);
})

btn3.addEventListener('click', ()=>{
   div.innerHTML =''
   tabOeuf = []
   console.log(tabOeuf.length);

})


}
export {exo5};