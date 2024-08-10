
const {createStore} = require('redux')

const increment = "INCREMENT";
const decrement = "DECREMENT";
const add_user = "ADD_USER"

const intialState = {
    count : 0
}
const incrementCount = () =>{
    return {
        type : increment
    }
}

const decrementCount = ()=>{
    return {
        type : decrement
    }
}

const addUser = ()=>{
    return {
        type : add_user,
        payload : {
            name : "Ruhit Baidya"
        }
    }
}

// reducer

const counterReducer = (state = intialState, action) =>{
    switch (action.type) {
        case increment :
            return {
                ...state,
                count : state.count + 1
            }
        case decrement :
            return {
                ...state,
                count : state.count - 1
            }
        default :
            state;
    }
}


const store = createStore(counterReducer);
store.subscribe(()=> console.log(store.getState()) )
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())