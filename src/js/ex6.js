function exo6(){

    let input1= document.getElementsByClassName('form-control')[0]
    let input2 = document.getElementsByClassName('form-control')[1]
    let btn = document.getElementsByClassName('btn')[2]
    let reponse = document.getElementById('response')
    
    btn.addEventListener('click', e => {
    
        let choix = document.querySelector('select')
        switch (choix.value) {
    
            case '+':
                reponse.innerText = Number(input1.value) + Number(input2.value);
                break;
            case '-':
                reponse.innerText = Number(input1.value) - Number(input2.value);
                break;
            case '*':
                reponse.innerText = Number(input1.value) * Number(input2.value);
                break;
            case '/':
                reponse.innerText = Number(input1.value) / Number(input2.value);
                break
        }
    })

}
export {exo6};