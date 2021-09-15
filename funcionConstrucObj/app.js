// asi puedo cosntruir un nuevo objeto 
// class Cat {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     // este es un metodo del objeto que estamos construyendo
//     eat(){
//         return `${this.name} is eating`
//     }
//     meow(){
//         return 'MEOWWW'
//     }
// }
// // en consola puedo escribir
// // const sasha = new Cat('sasha', 10)
// // sasha
// // console.log('hola!')
// // sasha.eat() ya puedo llamar el metodo del nuevo objeto sasha

// class Dog {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     bark(){
//         return 'WOFFF'
//     }
// }

// -----------------------------------

// como los objetos se repiten mucho vamos a extender la fincionalidad de un objeto principal
class Pet {
    constructor(name, age){
                this.name = name;
                this.age = age;
            }
            eat(){
                return `${this.name} is eating`
            }
}

class Dog extends Pet {
        
        bark(){
            return 'WOFFF'
        }
        eat(){
            return `${this.name} huele su comida`
        }
        // el sistema usara este metodo y si no esta el metodo eat dentro de este objeto buscara en el objeto principal
    }

    class Cat extends Pet {
        constructor(name, age, vidasRestantes=9)
        // en el caso de que le queramos poner otros atributos entonces usamos super del constructor principal
        super(name,age);
        this.vidasRestantes = vidasRestantes;
        meow(){
            return 'MEOWWW'
        }
    }

// // en consola puedo escribir
// // const sasha = new Cat('sasha', 10)
// // sasha
// // sasha.eat() ya puedo llamar el metodo del nuevo objeto sasha
// sasha.meow()