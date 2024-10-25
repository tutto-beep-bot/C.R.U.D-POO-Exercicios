'use strict'

//Criaçao da classe


class Hotel{

    #nombre
    #nhab
    #nplantas
    #superficie

    static maxHab = 20
    static costePersonal = 1500

    constructor(nombre, nhab, nplantas, superficie){
        this.#nombre = nombre
        this.#nhab = nhab
        this.#nplantas = nplantas
        this.#superficie = superficie
        this.mantenimentPersonas = null
        this.costeTotalPersonal = null
        this.calcularManteniment()
        
    }

    get nombre() {return this.#nombre}
    get nhab() {return this.#nhab}
    get nplantas() {return this.#nplantas}
    get superficie() {return this.#superficie}

    set nombre(newParam) {this.#nombre = newParam}
    set nhab(newParam) {this.#nhab = newParam}
    set nplantas(newParam) {this.#nplantas = newParam}
    set superficie(newParam) {this.#superficie = newParam}

    calcularManteniment(){
        this.mantenimentPersonas = Math.ceil(this.nhab / Hotel.maxHab)
        this.costeTotalPersonal = this.mantenimentPersonas * Hotel.costePersonal
    }

    toString(){
        return `
            nombre = ${this.nombre},
            numero de habitaciones = ${this.nhab},
            numero de plantas = ${this.nplantas},
            superficie = ${this.superficie},
            Mantenimiento Personas = ${this.mantenimentPersonas},
            Coste mantenimiento = ${this.costeTotalPersonal}
        `
    }
}

//Array para guardar objetos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hoteles = []

// Resultado no HTML ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let resultDiv = document.getElementById('result')

// Funcoes para buscar objetos no array criado e limpar os Inputs do HTML //////////////////////////////////////////////////////////////////////////

function buscarHotel(nombreHotel){
    let i = 0
    let posicio = -1

    do{
        let hotelActual = hoteles[i] // object
        let nombreHotelActual = hotelActual.nombre //propriedad
        if(nombreHotelActual.toLowerCase() == nombreHotel.toLowerCase()){
            posicio = i
        }
        i++
    }while(i < hoteles.length && posicio == -1)

    return posicio
}

              // limpar inputs

function cleanInputs(){
    // document.querySelector() // busca la primera coincidencia
    let inputs = document.querySelectorAll('input') // busca todas las coincidencias
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    }

    inputs[0].focus()
}


// Criando objetos /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function crearHotel(){
    let nombre = document.getElementById('nombre').value
    let nhab = parseInt(document.getElementById('nhab').value)
    let nPlantas = parseInt(document.getElementById('nplantas').value)
    let superficie = parseFloat(document.getElementById('superficie').value)
    cleanInputs()

    if(hoteles.length > 0){
    let verificarNombre = buscarHotel(nombre)
    if(verificarNombre != -1) return resultDiv.innerHTML = 'Este nombre ya está registrado'
    }

    const hotel1 = new Hotel (nombre, nhab, nPlantas, superficie)
    hoteles.push(hotel1)

    resultDiv.innerHTML = 'Hotel Creado'
    console.log(hoteles)

}


// Reading objetos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function readAllHotels(){
    // resultDiv.innerHTML = '<pre>' + hoteles.toString() + '</pre>'
    // OR
    resultDiv.innerHTML = ''
    hoteles.forEach(hotel => resultDiv.innerHTML += '<pre>' + hotel + '</pre>')
    cleanInputs()
}

function readOneHotel(){
    let hotelABuscar = document.getElementById('nombreHotelRead').value
    cleanInputs()

    if(hotelABuscar == '') return resultDiv.innerHTML = 'Nombre invalido.'
    if(hoteles.length == 0) return resultDiv.innerHTML = 'No hay Hoteles registrados.'

    let posicio = buscarHotel(hotelABuscar)

    if (posicio != -1){
    resultDiv.innerHTML = '<pre>' + hoteles[posicio].toString() + '</pre>'
    } else {
       resultDiv.innerHTML = 'Hotel no encontrado'
    }
}

// Updating objetos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateHotel(){
    let nombre = document.getElementById('updateHotelNom').value
    cleanInputs()
    resultDiv.innerHTML = ''
    
    //error captura de tela
    if(nombre == '') return resultDiv.innerHTML = 'Nombre inválido';
    if(hoteles.length == 0) return resultDiv.innerHTML = 'No hay hoteles registrados'

    let index = buscarHotel(nombre)
    if(index == -1) resultDiv.innerHTML = 'Hotel no encontrado'

    let hotelActual = hoteles[index]

    //getters 
    document.getElementById('updateHotelHab').value = hotelActual.nhab
    document.getElementById('updateHotelPlanta').value = hotelActual.nplantas
    document.getElementById('updateHotelSup').value = hotelActual.superficie

    document.getElementById('updateHotelNom').disabled = true

}


function modificarHotel(){
    let nombre = document.getElementById('updateHotelNom').value
    let nhab = parseInt(document.getElementById('updateHotelHab').value)
    let plantas = parseInt(document.getElementById('updateHotelPlanta').value)
    let superficie = parseFloat(document.getElementById('updateHotelSup').value)
    resultDiv.innerHTML = ''

    if (isNaN(nhab) || nhab < 1) return resultDiv.innerHTML = 'Número de habitaciones inválido';
    if (isNaN(plantas) || plantas < 1) return resultDiv.innerHTML = 'Número de plantas inválido';
    if (isNaN(superficie) || superficie < 1) return resultDiv.innerHTML = 'Valor de superficie inválido';

    let index = buscarHotel(nombre)
    let hotelActual = hoteles[index]

    //setter
    hotelActual.nhab = nhab
    hotelActual.nplantas = plantas
    hotelActual.superficie = superficie

    hotelActual.calcularManteniment()

    cleanInputs()
    document.getElementById('updateHotelNom').disabled = 'none'
}


// Deletando objetos ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteHotel(){
    
    //splice
        //index

    let hotelAEliminar = document.getElementById('nombreHotel').value
    cleanInputs()

    let posicio = buscarHotel(hotelAEliminar)

    if(posicio != -1){
        hoteles.splice(posicio, 1)
    } else {
        resultDiv.innerHTML = `Has eliminado el hotel ${hotelAEliminar}`
    }
