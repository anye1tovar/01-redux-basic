interface Action {
    type: string;
    payload?: any;
}



function reducer(state = 10, action: Action) {
    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }
    switch (action.type) {
        case 'INCREMENTAR': return state += 1;
        case 'DECREMENTAR': return state -= 1;
        case 'MULTIPLICAR': return state * action.payload;
        case 'DIVIDIR': return state / action.payload;
        default: return state
    }
    return state;
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}
const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}
const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}
const result = reducer(10, dividirAction);
console.log(result);
