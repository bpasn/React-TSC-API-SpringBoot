import { combineReducers } from 'redux'
import { userReducer } from './reducer/user.reducer'
import { productReducer } from './reducer/product.reducer'
export default combineReducers(
    {
        SignUser: userReducer,
        Products: productReducer
    }
)