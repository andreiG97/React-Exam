const initialState = {
    employees: []
}


export function employeesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return Object.assign({}, state, {
                employees:[...state.employees, action.payload] 
            })
    
        default:
            return state;
    }
}