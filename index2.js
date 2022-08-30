//// PRIMER ENTREGA

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    //metodos
    getFullName() {
       return(`El completo es: ${this.nombre} ${this.apellido}.`) 
    }

    addMascotas(mascotas) {
        this.mascotas.push(mascotas);
    }

    countMascotas(){
        return (this.mascotas.length)
    }

    addBook(nombre, autor){
        this.libros.push ({nombre, autor})
        
    }

    getBookName() {

        return this.libros.map(object =>{
            return (object.nombre);
        }); 

    
    }
}

//
const persona1 = new Persona("Damian", "Chaqueta",);
const persona2 = new Persona("Santiago", "Merlini");

//mascotas
persona1.addMascotas("Merlo");
persona1.addMascotas("Dante");
persona1.addMascotas("Mario");

//libros
persona1.addBook("El Poder de los hábitos", "Charles Duhigg")
persona1.addBook("Focus", "Daniel Goleman")

//consols
console.log(persona1.getFullName())
console.log(persona1.mascotas)
console.log(persona1.countMascotas())
console.log(persona1.libros)
console.log(persona1.getBookName())