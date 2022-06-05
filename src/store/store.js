import { createStore } from 'redux';
import { appReducers } from '../reducers/index';

export const store = createStore(appReducers);

