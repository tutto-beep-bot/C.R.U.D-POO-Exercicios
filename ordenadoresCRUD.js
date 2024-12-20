'use strict'

const ordinadors = []


class Ordinador {
    constructor(marca, model, processador, RAM, discDur){
        this._marca = marca
        this._model = model
        this._processador = processador
        this._RAM = RAM
        this._discDur = discDur
    }

    //getter
    get marca() {return this._marca}
    get model(){return this._model}
    get processador(){return this._marca}
    get RAM(){return this._RAM}
    get discDur(){return this._discDur}

    //setter
    set processador(newParam){this._processador = newParam}
    set RAM(newParam){this._RAM = newParam}
    set discDur(newParam){this._discDur = newParam}


    toString(){
        return `
        Marca: ${this.marca} <br>
        Model: ${this.model}<br>
        Processador: ${this.processador}<br>
        RAM: ${this.RAM}<br>
        Disco Duro: ${this.discDur}<br>
        `
    }

    ejecutar(newParam){
        return `En estos momentos se está ejecutando '${newParam}' en el ordenador `
    }
    
}


let divResult = document.getElementById('result')

function crearOrdinadors(){
    let marca, model, processador, RAM, discDur
    let peticiones = 2
    const message = 'Ordenador creado'

    if(isNaN(peticiones) || peticiones < 1) return divResult.innerHTML = 'Naaaa'

    for(let i = 1; i <= peticiones; i++){
        marca = prompt('Introduzca la marca del ordenador ' + i + ':')
        model = prompt('Introduzca el modelo del ordenador ' + i + ':')
        processador = prompt('Introduzca el processador ' + i + ':')
        RAM = prompt('Introduzca la RAM del ordenador ' + i + ':')
        discDur = prompt('Introduzca la capacitat del Disco Duro ' + i + ':')

        //instancia
        const ordenadorUsuari = new Ordinador(marca, model, processador, RAM, discDur)

        //push here
        ordinadors.push(ordenadorUsuari)
        alert(message)
        console.log(ordenadorUsuari)
    }
            // [hp 1200 i9 32gb]
            // hp
            // 1200
            // i9...
    print()
    procesosOrdenador()
}

function print(){
    divResult.innerHTML = `${ordinadors.join('<br>')}`

    // ordinadors.forEach(ordenadorActual => divResult.innerHTML += `<pre> ${ordenadorActual.toString()} </pre>`)
    
}

function procesosOrdenador(){
    alert('Ahora le preguntaremos por el programa')
    divResult.innerHTML += '<br>'
    for(let i = 0; i < ordinadors.length; i++){
        let ordenadorActual = ordinadors[i]
        let programa = prompt('Escriba el programa ' + (i + 1) + ':')
        divResult.innerHTML += ordenadorActual.ejecutar(programa) + `${i + 1}<br>`
    }
}
