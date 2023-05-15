import { createStore, applyMiddleware, compose, Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import reducerCombinde from './combineReducer'
import initialState from './initialState';
import { Action as _Action } from './typing_action';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-mixed-operators
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducerCombinde, initialState, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = typeof store.getState


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<_Action>
>;

export default store