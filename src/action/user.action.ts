import axios, { AxiosError, AxiosInstance } from "axios"
import { AppDispatch, AppState } from "../redux/store"
import AppSetting from "../constance/AppSetting"
import { Sign } from "../constance/action.enum"

export const signIn = (bodySign: ISignInRequest) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: Sign.SIGNIN_REQUEST })
        try {
            const { data } = await axios.post(AppSetting.URI_SIGNIN, bodySign)
            if (data) {
                dispatch({ type: Sign.SIGNIN_SUCCESS, payload: data })
                localStorage.setItem('userInfo', JSON.stringify(data))
            }
            dispatch({type:"SHOW",payload:{
                message:"Login Success",
                status:true,
                severity:"success"
            }})
            setTimeout(() => window.location.href = '/', 2 * 1000)
        } catch (error) {
            dispatch({ type: Sign.SIGNIN_FAIL, error: error })
            dispatch({
                type: "SHOW", payload: {
                    message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
                    status: true,
                    severity: "error"
                }
            })
        }
    }
}

export const signUp = (bodySign: ISignUpRequest) => async (dispatch: AppDispatch) => {
    dispatch({ type: Sign.SIGN_UP_REQUEST })
    try {
        const response = await axios.post(AppSetting.URI_SIGNUP, bodySign)
        dispatch({
            type: Sign.SIGN_UP_SUCCESS
        })
        dispatch({
            type: "SHOW", payload: {
                message: response.data.message,
                status: true,
                severity: "success"
            }
        })
        setTimeout(() => {
            window.location.href = '/signin'
        }, 2 * 1000)
    } catch (error) {
        dispatch({ type: Sign.SIGN_UP_FAIL })
        dispatch({
            type: "SHOW", payload: {
                message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
                status: true,
                severity: "error"
            }
        })
    }
}
export const signOut = () => (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type: Sign.SIGN_OUT })
}