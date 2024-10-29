'use strict'

class Cliente {
    
    #dni
    #nombre
    #apellido
    #cuentas
    
    constructor(dni, nombre, apellido){
        this.#dni = dni
        this.#nombre = nombre
        this.#apellido = apellido
        this.#cuentas = []
    }

    get dni() {return this.#dni}
    get nombre() {return this.#nombre}
    get apellido() {return this.#apellido}
    get cuentas() {return this.#cuentas}

    set dni(newValue) {this.#dni = newValue}
    set nombre(newValue) {this.#nombre = newValue}
    set apellido(newValue) {this.#apellido = newValue}

    asociarCuenta(objetoCuenta){
        this.#cuentas.push(objetoCuenta)
    }

    //visualizar cuentas
    toString(){
        return `
        dni: ${this.dni}
        nombre: ${this.nombre}
        apellido: ${this.apellido}
        cuentas: ${this.cuentas.join('<br>')}
        `
    }
}



class Cuenta{

    #nCuenta
    #saldo
    
    constructor(nCuenta){
        this.#nCuenta = nCuenta
        this.#saldo = 0
    }

    get nCuenta() {return this.#nCuenta}
    get saldo() {return this.#saldo}
    
    toString(){
        return `
            número de cuenta: ${this.nCuenta}
            saldo: ${this.saldo}
        `
    }
    //ingresas dinero

    ingresarDinero(dinerillo){
        this.#saldo += dinerillo
    }
    //retirar dinero
    retirarDinero(dinerillo){
        if(this.#saldo >= dinerillo){
            this.#saldo -= dinerillo
            return true
        } else {
            return false // undefined
        }

    }
}


const resultDiv = document.getElementById('result')

function crearCliente(){
    resultDiv.innerHTML = ''
    let dni = prompt('dni')
    let nombre = prompt('nombre')
    let apellido = prompt('apellido')

    const client = new Cliente (dni, nombre, apellido);
    console.log(client)

    clientes.push(client)

    resultDiv.innerHTML = 'Usuario creado con exito'

}

function visualizarTodosClientes(){
    resultDiv.innerHTML = ''
    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'

    for(let index = 0; index < clientes.length; index++){
        let clienteActual = clientes[index]
        resultDiv.innerHTML += `<pre> ${clienteActual.toString()} </pre>`
    }
}

function buscarCliente(dniUser){

    let i = 0
    let posicion = -1
    do{
        if(dniUser == clientes[i].dni){
            posicion = i
        }
        i++
    } while(i < clientes.length && posicion == -1)

    return posicion
}

function visualizarCliente(){
    resultDiv.innerHTML = ''
    let dniUser = prompt('dni')

    //array vacio
    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'

    let posicion = buscarCliente(dniUser)
    if(posicion == -1) return resultDiv.innerHTML = 'Cliente no encontrado'

    let clienteActual = clientes[posicion] // alias

    resultDiv.innerHTML = `<pre> ${clienteActual.toString()} </pre>`
}

function eliminarCliente(){
    resultDiv.innerHTML = ''
    let dniUser = prompt('dni')

    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'

    let posicion = buscarCliente(dniUser)
    if(posicion == -1) return resultDiv.innerHTML = 'Cliente no encontrado'

    clientes.splice(posicion, 1)

    resultDiv.innerHTML = 'Cliente eliminado'
}

function crearCuentaCliente(){
    resultDiv.innerHTML = ''
    let dniUser = prompt('dni')

    //array vacio
    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'

    let posicion = buscarCliente(dniUser)
    if(posicion == -1) return resultDiv.innerHTML = 'Cliente no encontrado'

    let clienteActual = clientes[posicion] //objeto
    let cuentas = clienteActual.cuentas // array
    console.log(cuentas)


    let numeroCuenta = cuentas.length + 1 
    console.log(numeroCuenta)

    //instancia

    const nuevaCuenta = new Cuenta(numeroCuenta)
    clienteActual.asociarCuenta(nuevaCuenta)
    // cuentas.push(nuevaCuenta)
    resultDiv.innerHTML = `Operacion realizada con exito <br> <pre> ${clienteActual.toString()} </pre>`

}

function incluirSaldo(){
    resultDiv.innerHTML = ''
    //cliente 
    //cuenta
        //metodos
    
    let dniUser = prompt('dni')
    let nCuentaUser = prompt('n cuenta')
    let dineroIngresar = parseFloat(prompt('$$'))

    //array vacio
    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'
    
    let posicion = buscarCliente(dniUser)
    if(posicion == -1) return resultDiv.innerHTML = 'Cliente no encontrado'

    let clienteActual = clientes[posicion] //objeto
    let cuentas = clienteActual.cuentas // array
    if(cuentas.length == 0) return resultDiv.innerHTML = 'No hay cuentas registradas para este cliente'

    let posicionCuentaActual = buscarCuenta(nCuentaUser, cuentas)
    if(posicionCuentaActual == -1) return resultDiv.innerHTML = 'Cuenta no encontrada'

    let cuentaActual = cuentas[posicionCuentaActual]

    cuentaActual.ingresarDinero(dineroIngresar)

    resultDiv.innerHTML = 'Operacion realizada con exito'
    resultDiv.innerHTML += `<pre> ${clienteActual.toString()} </pre>`
}

function buscarCuenta(nCuentaUser, cuentas){
    let i = 0
    let posicion = -1

    do{
        let cuentaActual = cuentas[i]
        if(cuentaActual.nCuenta == nCuentaUser){
            posicion = i
        }
        i++
    }while(i < cuentas.length && posicion == -1)

        return posicion
}

function quitarSaldo(){
    resultDiv.innerHTML = ''
    let dniUser = prompt('dni')
    let nCuentaUser = prompt('n cuenta')
    let dineroRetirar = parseFloat(prompt('$$'))

    //array vacio
    if(clientes.length == 0) return resultDiv.innerHTML = 'No hay clientes registrados'
    
    let posicion = buscarCliente(dniUser)
    if(posicion == -1) return resultDiv.innerHTML = 'Cliente no encontrado'

    let clienteActual = clientes[posicion] //objeto
    let cuentas = clienteActual.cuentas // array
    if(cuentas.length == 0) return resultDiv.innerHTML = 'No hay cuentas registradas para este cliente'

    let posicionCuentaActual = buscarCuenta(nCuentaUser, cuentas)
    if(posicionCuentaActual == -1) return resultDiv.innerHTML = 'Cuenta no encontrada'

    let cuentaActual = cuentas[posicionCuentaActual]

    let operacionRealizada = cuentaActual.retirarDinero(dineroRetirar)
    if(operacionRealizada){
        resultDiv.innerHTML = 'Operacion exitosa'
    } else{
        resultDiv.innerHTML = 'Operacion fallida'
    }
    resultDiv.innerHTML = 'Operacion realizada con exito'
    resultDiv.innerHTML += `<pre> ${clienteActual.toString()} </pre>`
}
