import './styles.css';
import { TodoList, Todo} from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!!!!');
// todoList.nuevoTodo(tarea);


// todoList.todos.forEach(todo => crearTodoHTML(todo));
todoList.todos.forEach( crearTodoHTML );

console.log('todos',todoList.todos)