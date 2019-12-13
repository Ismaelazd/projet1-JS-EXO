function exo7() {

    let div = document.getElementById('div7')
    let todo = document.getElementById('todo')
    let toutes = document.querySelectorAll('#inputs7 input')[0]
    let completees = document.querySelectorAll('#inputs7 input')[1]
    let aFaire = document.querySelectorAll('#inputs7 input')[2]
    let div71;
    let p;
    let checkbox;
    let span;
    let close;
    let hr;
    let tabClose = [];
    let tabCheck = [];
    let currentText;


    function createElem() {
        div71 = document.createElement('div')
        p = document.createElement('p')

        transformToInput()

        checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        span = document.createElement('span')
        close = document.createTextNode("\u00D7");
        hr = document.createElement('hr')
        currentText = document.createElement('input')
        currentText.type = 'text'
    }


    function transformToInput() {

        tabCheck.forEach(event => {
            event.children[1].ondblclick = function () {
                console.log('heeellooo');
                currentText.value = event.children[1].innerText
                event.children[1].innerHTML = ''
                event.children[1].appendChild(currentText)
                console.log(event.children);
                event.children[1].addEventListener('keypress', ev => {
                    if (ev.key == 'Enter' && currentText.value != '') {
                        p = event.children[1];
                        p.innerHTML = currentText.value
                        event.children[1].appendChild(p)
                        console.log(event.children);
                    }
                })
            }
        })

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

    function deleteElem() {

        tabClose.forEach(elem => {
            elem.onclick = function () {
                let div = this.parentElement
                div.remove()
            }
        })
    }

    function colorCheck() {
        tabCheck.forEach(elem => {

            //console.log(elem.children[1]);

            if (elem.children[0].checked) {
                elem.style.backgroundColor = '#8bec3b'

            } else {
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
                todo.value = ''
            }
        })
    })


    div.addEventListener('click', colorCheck)


    toutes.addEventListener('click', () => {
        tabCheck.forEach(element => {
            element.style.display = 'flex'
        })
        toutes.classList.remove('inputs71')
        toutes.classList.add('selection')
        completees.classList.add('inputs71')
        aFaire.classList.add('inputs71')



    })
    completees.addEventListener('click', () => {
        tabCheck.forEach(element => {
            if (element.children[0].checked) {
                element.style.display = 'flex'
            } else {
                element.style.display = 'none'
            }
        })
        completees.classList.remove('inputs71')
        completees.classList.add('selection')
        toutes.classList.add('inputs71')
        aFaire.classList.add('inputs71')
    })
    aFaire.addEventListener('click', () => {
        tabCheck.forEach(element => {
            if (element.children[0].checked) {
                element.style.display = 'none'
            } else {
                element.style.display = 'flex'
            }
        })
        aFaire.classList.remove('inputs71')
        aFaire.classList.add('selection')
        completees.classList.add('inputs71')
        toutes.classList.add('inputs71')
    })


}


export {
    exo7
}