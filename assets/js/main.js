function InitCalculator () {
    // Variável
    this.display = document.querySelector('.display')

    // Metódos
    this.init = () => {
        this.btnEvents()
        this.enterPress()
        this.backPress()
    }

    this.btnEvents = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) this.addNumToDisplay(el)
            if (el.classList.contains('btn-clear')) this.cleanNumbers()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.result()
        })
    }

    this.addNumToDisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus()
    }
    this.cleanNumbers = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1)   
    this.result = () => {
        try {
            const conta = eval(this.display.value)
            
            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida')
                return this.cleanNumbers()
            } else {
                this.display.value = conta
            } 

        } catch (err) {
            alert('Conta inválida')
            return this.cleanNumbers()
        }
    }

        this.enterPress = () => {
            this.display.addEventListener('keypress', event => {
                if (event.code = 'Enter') {
                    this.result()
                }
            })
        }

        this.backPress = () => {
            this.display.addEventListener('keypress', event => {
                if(event.code = 'Backspace') {
                    this.del()
                }
            })
        }
}

const calculadora = new InitCalculator()
calculadora.init()