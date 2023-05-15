import { Action, ISignUer, IUser } from "../typing_action";

export const userReducer = (state: ISignUer = {}, action: Action): ISignUer => {
    switch (action.type) {
        case "REQUEST":
            return { loading: true };
        case "SUCCESS":
            return { loading: false, userInfo: action.payload as IUser }
        case "FAIL":
            return { loading: false, error: action.error }
        case "SIGN_OUT":
            return {}
        default:
            return state
    }
}
