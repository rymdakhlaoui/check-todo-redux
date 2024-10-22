import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes"



const initialState = {
    todos : [
        {id: 1, title: 'Task 1', completed: false},
        {id: 2, title: 'Task 2', completed: true},
        {id: 3, title: 'Task 3', completed: false},
    ]
}


const todoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case DONE_TASK:
            return {...state, todos: state.todos.map((todo) => todo.id === payload ? {...todo, completed: !todo.completed} : todo)}
    
        case DELETE_TASK:
            return {...state, todos: state.todos.filter((todo) => todo.id !== payload)}
         
        case ADD_TASK:
            return {...state, todos: [...state.todos, payload]}

        case EDIT_TASK:
            return {...state, todos: state.todos.map((todo) => todo.id === payload.id ? {...todo, title: payload.newTitle} : todo)}

        default:
            return state
    }
}


export default todoReducer