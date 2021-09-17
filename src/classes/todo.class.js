export class Todo {

    // Para regresar una instancia de Todo en lugar de un objeto
    static fromJson({tarea, id, completado, creado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor(tarea){

        this.tarea = tarea;
        
        this.id         = new Date().getTime(); // 5827372133
        this.creado     = new Date();
        this.completado = false;

    }

    imprimirClase(){ // Solo es para referencia, si no hay instancia de clase en el objeto del LocalStorage, no podria acceder a este metodo de clase
        console.log(`${this.tarea} - ${this.id}`)
    }
}