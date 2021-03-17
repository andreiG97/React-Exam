import { createStore } from 'redux';
import { employeesReducer } from './reducers/formReducer';

const store = createStore(employeesReducer);

export default store;