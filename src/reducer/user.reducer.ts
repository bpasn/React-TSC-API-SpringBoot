import { Sign } from "../constance/action.enum";
import { Action, ISignUer, IUser, SignUp } from "../interface/typing_action";

export const userReducer = (state: ISignUer = {}, action: Action): ISignUer => {
    switch (action.type) {
        case Sign.SIGNIN_REQUEST:
            return { loading: true };
        case Sign.SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload as IUser }
        case Sign.SIGNIN_FAIL:
            return { loading: false, error: action.error }
        case Sign.SIGN_OUT:
            return {}
        default:
            return state
    }
}

export const signUpReducer = (state: { loading: boolean } = { loading: false }, action: SignUp) => {
    switch (action.type) {
        case Sign.SIGN_UP_REQUEST:
            return { loading: true };
        case Sign.SIGN_UP_SUCCESS:
            return { loading: false };
        case Sign.SIGN_UP_FAIL:
            return { loading: false };
        default:
            return state;
    }
}