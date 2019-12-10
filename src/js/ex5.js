function exo5(){

let btn = document.getElementById('input1Ex5')
let div = document.getElementById('div5')

btn.addEventListener('click',()=>{
    let image = document.createElement('img')
    image.setAttribute('src','../../public/img/oeuf.png')
    image.style.height = '75px'
    div.appendChild(image)
})

}
export {exo5};