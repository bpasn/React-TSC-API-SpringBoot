import { AxiosInstance } from "axios"
import { AppDispatch } from "../store"
import Constants from "../static/static.cont"

export const signIn = (axiosHook:AxiosInstance ,bodySign: SignInRequest) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: "REQUEST" })
        try {
            const { data } = await axiosHook.post(Constants.SIGNIN_USER, bodySign)
            if (data) {
                dispatch({ type: "SUCCESS", payload: data })
                localStorage.setItem('userInfo', JSON.stringify(data))
            }
        } catch (error) {
            dispatch({ type: "FAIL", error:  error })
        }
    }
}
export const signOut = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: "SIGN_OUT" })
}