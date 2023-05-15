import axios from "axios"
import { AppDispatch } from "../store"

export const signIn = (bodySign: { email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: "REQUEST" })
        try {
            const { data } = await axios.post('/api/login', bodySign)
            if (data) {
                dispatch({ type: "SUCCESS", payload: data.payload })
                localStorage.setItem('userInfo', JSON.stringify(data.payload))
            }
        } catch (error) {
            console.log(error)
            dispatch({ type: "FAIL", error: error })
        }
    }
}
export const signOut = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: "SIGN_OUT" })
}