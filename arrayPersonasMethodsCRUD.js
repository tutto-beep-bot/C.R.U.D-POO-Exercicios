'use strict'
let resultDiv = document.getElementById('result')

const personas = [
    {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    },
    {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr"]
    },
    {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"]
    },
    {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["jugar a fútbol", "viajar"]
    },
    {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer ejercicio"]
    }
    ];


    function checkFind(){
        // 1 Find 
        let dniPersona = personas.find(persona => persona.dni == "54321678");
        (dniPersona === undefined) ? console.log('No dado de alta') : console.log('Si dado de alta') 

                                    //or

        // do - while
        // elementos = 3
        let j = 0
        do {
            let personaActual = personas[j]
            console.log(personaActual)
            // if()
            j++
        } while (j < personas.length)
    }

    //checkFind()

    function checkFindIndex(){
        //2 Find Index
        let dniBuscado = "87654321"
        let personaPosicion = personas.findIndex(persona => persona.dni == dniBuscado);
        if (personaPosicion != -1) console.log('El objeto esta en la posicion: ', personaPosicion)

                                    //or

        let i = 0
        let encontrado = false
        let posicio = -1
        do {
            let posicionPersona = i
            let personaActual = personas[posicionPersona]
            let dniActual = personaActual.dni

            if(dniActual == dniBuscado){
                encontrado == true
                posicio = posicionPersona
            }
            
            i++
        } while(i < personas.length && encontrado == false)

        console.log('La posicion es: ', posicio)
    }

    checkFindIndex()
    

    function CheckFilter(){

        let hobbyBuscado = 'viajar'
        const hobbyEncontrado = personas.filter(persona => persona.hobbies.includes(hobbyBuscado))
        console.log(hobbyEncontrado)
    
                    //OR

        let hobbieToFind = 'leer'
        const personasConHobbieToFind = []

        for(let i = 0; i < personas.length; i++){
            let personaActual = personas[i]
            let personaHobbies = personaActual.hobbies 

            for(let j = 0; j < personaHobbies.length; j++){
                let hobbieActual = personaHobbies[j]

                if(hobbieActual == hobbieToFind){
                    personasConHobbieToFind.push(personaActual)
                }

            }

        }

        console.log(personasConHobbieToFind)
    }
    
  
    function checkReduce(){

        const totalHobbies = personas.reduce((total, persona) => total + persona.hobbies.length, 0);
        console.log(totalHobbies)

        // OR 

        let total = 0
        for(let i = 0; i < personas.length; i++){
            let personaActual = personas[i]
            let hobbieActual = personaActual.hobbies
            let cantidadHobbies = hobbieActual.length

            total += cantidadHobbies
        }

        console.log(total)
    }

    //checkReduce()

    function checkSomeIncludes(){ //boolean
        let hobbieEnConcreto = 'programar'
        let i = 0;
        let encontrado = false

        do {
            let personaActual = personas[i]
            let hobbiesPersonaActual = personaActual.hobbies
            
            for(let j = 0; j < hobbiesPersonaActual.length; j++){
                if(hobbiesPersonaActual[j] == hobbieEnConcreto){
                    encontrado == true
                    console.log(`Aqui está: ${personaActual.nombre}`)
                }
            }

        } while (i < personas.length && !encontrado)

        console.log(encontrado)

        //let booleanHobbie = personas.some(persona => personas.hobbies )
    }


    function checkFindIncludes(){
        
        let i = 0
        let hobbieEnConcreto = 'viajar'
        let objectoActual = undefined

        do {
            let personaActual = personas[i] // object
            let personaHobbies = personaActual.hobbies //array

            for(let j = 0; personaHobbies.length; j++){
                if(personaHobbies[j] == hobbieEnConcreto){
                    console.log('Encontrado');
                    objectoActual = personaActual

                }
            }
            i++
        } while (i < personas.length && objectoActual == undefined)

            // OR

        const findIncludes = personas.find(persona => persona.hobbies.includes(hobbieEnConcreto))
        console.log(findIncludes)
    }

    function checkMap(){
        const noms = personas.map(persona => persona.nombre.toUpperCase());
        console.log(noms);
    
    }
