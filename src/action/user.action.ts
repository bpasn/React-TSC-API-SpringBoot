import { AxiosInstance } from "axios"
import { AppDispatch, AppState } from "../redux/store"
import AppSetting from "../constance/AppSetting"
import { Sign } from "../constance/action.enum"

export const signIn = (axiosHook: AxiosInstance, bodySign: ISignInRequest) => {
    return async (dispatch: AppDispatch) => {
        console.log("BODY ", bodySign)
        dispatch({ type: Sign.SIGNIN_REQUEST })
        try {
            const { data } = await axiosHook.post(AppSetting.URI_SIGNIN, bodySign)
            if (data) {
                dispatch({ type: Sign.SIGNIN_SUCCESS, payload: data })
                localStorage.setItem('userInfo', JSON.stringify(data))
            }
        } catch (error) {
            dispatch({ type: Sign.SIGNIN_FAIL, error: error })
        }
    }
}
export const signOut = () => (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type: Sign.SIGN_OUT })
}