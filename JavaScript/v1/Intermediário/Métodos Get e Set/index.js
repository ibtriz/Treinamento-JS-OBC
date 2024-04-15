class Pessoa {
    constructor () {
        this.data = {}
    }

    cpfIsValid (value) {
        return /^\d\.\d\.\d\-\d$/.test(value)
    }

    get cpf () {
        // verifica se a propriedade não existe no atributo this.data da classe
        if (!this.data.hasOwnProperty('cpf')) {
        return undefined
        }
        // retorna o valor da cpf
        return this.data.cpf
    }

    set cpf (value) {
        if (!this.cpfIsValid(value)) {
        throw new Error('numero de cpf invalido')
        }

        this.data[ 'cpf' ] = value
    }
}

const pessoa = new Pessoa()

pessoa.cpf = '999.999.999-99'

console.log(pessoa.cpf) // 999.999.999-99