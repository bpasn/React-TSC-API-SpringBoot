import { AppDispatch, AppState } from "../store";
import { AxiosInstance } from 'axios'
export const productAction = (axiosHook: AxiosInstance) => async (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type: "PRODUCT_REQUEST" })
    try {
        const product = await axiosHook.get('/api/product')
        dispatch({ type: "SUCCESS", payload: product.data.payload })
    } catch (error) {
        dispatch({
            type: "PRODUCT_FAIL",
            error: error
        })
    }
} 