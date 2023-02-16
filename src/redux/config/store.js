import { combineReducers, createStore } from 'redux';
import memoReducer from '../modules/memoModule';

const RootReducer = combineReducers({
    // 리듀서 들어갈 자리~~
    memoReducer,
});

const store = createStore(RootReducer);

export default store;
