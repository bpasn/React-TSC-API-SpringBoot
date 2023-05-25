import { combineReducers } from 'redux'
import { userReducer } from '../reducer/user.reducer'
import { productReducer } from '../reducer/product.reducer'
export default combineReducers(
    {
        SignUser: userReducer,
        Products: productReducer,
        Popup: (state: IPopup = {
            settingPopup: false, title: "", description: "",
            callback: (e) => { },
        }, action: { type: string, payload: IPopup }) => {
            switch (action.type) {
                case "show":
                    return {
                        ...state,
                        settingPopup: true,
                        title: action.payload.title,
                        description: action.payload.description,
                        callback: action.payload.callback
                    };
                case "hide":
                    return { ...state, settingPopup: false }
                default:
                    return state;
            }
        },
        Error: (state: IError = { message: "", status: false, severity: "success" }, action: { type: string, payload: IError }) => {
            switch (action.type) {
                case "SHOW":
                    return { ...state, message: action.payload.message, status: true, severity: action.payload.severity }
                case "HIDE":
                    return { ...state, status: false }
                default:
                    return state;

            }
        }
    }
)