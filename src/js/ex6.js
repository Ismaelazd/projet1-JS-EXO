function exo6() {

    // Niveau 1
    //----------------------------------------


    let input1 = document.getElementsByClassName('form-control')[0]
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


    // Niveau 2
    //----------------------------------------    


    class Calculator {
        constructor(previousOperandTextElement, currentOperandTextElement) {
            this.previousOperandTextElement = previousOperandTextElement
            this.currentOperandTextElement = currentOperandTextElement
            this.clear()
        }

        clear() {
            this.currentOperand = ''
            this.previousOperand = ''
            this.operation = undefined
        }

        appendNumber(number) {
            if (number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
        }

        chooseOperation(operation) {
            if (this.currentOperand === '') return
            if (this.previousOperand !== '') {
                this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
        }

        compute() {
            let computation
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if (isNaN(prev) || isNaN(current)) return
            switch (this.operation) {
                case '+':
                    computation = prev + current
                    break
                case '-':
                    computation = prev - current
                    break
                case '*':
                    computation = prev * current
                    break
                case '÷':
                    computation = prev / current
                    break
                default:
                    return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ''
        }

        getDisplayNumber(number) {
            const stringNumber = number.toString()
            const integerDigits = parseFloat(stringNumber.split('.')[0])
            const decimalDigits = stringNumber.split('.')[1]
            let integerDisplay
            if (isNaN(integerDigits)) {
                integerDisplay = ''
            } else {
                integerDisplay = integerDigits.toLocaleString('en', {
                    maximumFractionDigits: 0
                })
            }
            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`
            } else {
                return integerDisplay
            }
        }

        updateDisplay() {
            this.currentOperandTextElement.innerText =
                this.getDisplayNumber(this.currentOperand)
            if (this.operation != null) {
                this.previousOperandTextElement.innerText =
                    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
            } else {
                this.previousOperandTextElement.innerText = ''
            }
        }
    }




    let chiffres = document.querySelectorAll('.number')
    let sign = document.querySelectorAll('.sign')
    let reset = document.getElementById('reset')
    let egal = document.getElementById('egal')
    let rep = document.getElementById('rep')
    let input = document.getElementById('current')

    const calculator = new Calculator(rep, input)


    console.log(chiffres);

    chiffres.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()

        })
    })

    sign.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
    })

    egal.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })

    reset.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })

}
export {
    exo6
};