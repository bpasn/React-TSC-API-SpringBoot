import { combineReducers } from 'redux'
import { signUpReducer, userReducer } from '../reducer/user.reducer'
import { productReducer } from '../reducer/product.reducer'
import { EProduct } from '../constance/action.enum';
import { LoadPageAction } from '../interface/typing_action';
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
        Error: (state: IError = { message: "", errorStatus: false, severity: "success" }, action: { type: 'SHOW' | 'HIDE', payload: IError }) => {
            switch (action.type) {
                case "SHOW":
                    window.scrollTo(0, 0)
                    return { ...state, message: action.payload.message, errorStatus: true, severity: action.payload.severity }
                case "HIDE":
                    return { ...state, errorStatus: false }
                default:
                    return state;

            }
        },
        LoadingProgress: (state: { loading: boolean } = { loading: false }, action: { type: 'SHOW_LOADING' | 'HIDE_LOADING'}) => {
            switch (action.type) {
                case "SHOW_LOADING":
                    return { loading: true }
                case "HIDE_LOADING":
                    return { loading: false }
                default:
                    return state;

            }
        },
        SignUp: signUpReducer,
        LoadPage: (
            state: { loading: boolean, error: any, loadPage: ILoadingPage[] } = { loading: false, error: null, loadPage: [] },
            action: LoadPageAction) => {
            switch (action.type) {
                case EProduct.LOAD_PAGE_REQUEST:
                    return { ...state, loading: true };
                case EProduct.LOAD_PAGE_SUCCESS:
                    return { ...state, loading: false, loadPage: action.payload };
                case EProduct.LOAD_PAGE_FAIL:
                    return { ...state, loading: false, loadPage: [], error: action.error }
                default:
                    return state;
            }
        }
    }
)