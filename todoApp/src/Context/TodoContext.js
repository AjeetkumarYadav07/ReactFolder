import {CreateContext} from 'react' 

export const TodoContext = CreateContext( {
    todos : [
        {
            id: 1 ,
            todo: "Learn react",
            isDone: false 
        }
     ],
     addTodo: (todo) => {} ,
     updateTodo: (id , todo)=> {},
     deleteTodo : (id) =>{},
     toggleComplete : (id) => {}
} );






export const useTodo = () =>{
     
    
    return useContext(TodoContext);


}

export const Todoprovider = TodoContext.Proivder 