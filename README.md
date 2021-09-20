# TodoApp - [GitHub Page](https://alesyt0h.github.io/javascript-todoApp/#/)

<h3 align="center">Preview</h3>
<p align="center">
  <img src="https://github.com/alesyt0h/javascript-todoApp/blob/main/todoApp%20-%20Preview.jpg?raw=true" style="width:630px" alt="TodoApp - Preview"/>
</p>


* Archivo index exclusivo para importar módulos
* Creación de varias clases instanciadas.
* Guardar en el LocalStorage los Todo's creados.
* Cargar los Todo's desde el LocalStorage y convertirlos a instancias de la clase **Todo** con `map` -- Creandonos un método estático en la clase Todo donde recibimos todo el array, y creamos una instancia de la clase, a la cual le cambiamos las propiedas por las que vienen en el array que le mandamos.
* Cuando se usa una expresión donde el argumento que se manda es solo uno, por ejemplo: `( obj => Todo.fromJson(obj) ) ` Se puede usar la forma corta: ` Todo.fromJson ` Pero el método largo queda mucho más explicito y fácil de entender.
* Método para crear el HTML: Con todo el template entre backticks ` `` `  se agrega dentro de una `const div = ...`, para agrupar todo el elemento y poder insertarlo correctamente se usa `append(div.firstChild)` esto añade el primer hijo del div creado, en este caso seria el primer elemento que quiero añadir, asi se respetaria la secuencia de añadido.
* **Manera sencilla de crear un ID único** (en el caso de que implique alguna interacción del usuario): `new Date().getTime()` retorna el valor en milisegundos desde el 1 de enero de 1970 - Si no implicase interacción con el usuario podrian haber dos "id" iguales, pues la ejecución en JavaScript puede llegar a producirse muy rápidamente.
* Filtrar y ocultar por Todo's completados o pendientes. 
* Devolver un array con los filtros que le aplique: `array.filter( filtro => filtro.usuario.length > 10)` Guardaria en el nuevo array solo los usuarios que tuvieran una longitud superior a 10
* TitleCase - Cada vez que se añade un todo se capitaliza la primera letra: 
```javascript
const titleCase = input.value[0].toUpperCase() + input.value.slice(1);
```
* Para extrar un atributo personalizado en una etiqueta HTML: `getAttribute('data-id')`
* Borrar un elemento HTML con `removeChild(elementoABorrar)` 
* Para hacer referencia al **Parent Element**: `event.target.parentElement` -- Para seleccionar un parent mas arriba simplemente concatenar el parentElement: `.parentElement.parentElement` 
* Para ir ciclando el añadir una clase o quitarla: `.classList.toggle('hidden')` 
* Para comprobar si una etiqueta HTML contiene una clase especifica: `.classList.contains('completed')`
* Para añadir una clase al elemento clickeado desde un event listener: ` event.target.classList.add('selected')`
