function exo7() {

    let div = document.getElementById('div7')
    let todo = document.getElementById('todo')
    let div71;
    let p;
    let checkbox;
    let span;
    let close;

    function createElem() {
        div71 = document.createElement('div')
        p = document.createElement('p')
        checkbox = document.createElement('input');
        span = document.createElement('span')
        close = document.createTextNode("\u00D7");
    }

    function addElem() {
        span.appendChild(close)
        checkbox.type = "checkbox";
        p.innerText = todo.value
        div71.appendChild(checkbox)
        div71.appendChild(p)
        div71.appendChild(span)
        div71.classList.add('div71')
        div.appendChild(div71)
    }

    document.addEventListener('keypress', event => {

        if (event.key == 'Enter') {
            createElem()
            addElem()
            todo.value = ''
        }
    })

}
export {
    exo7
}