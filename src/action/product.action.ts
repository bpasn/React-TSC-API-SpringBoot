import { EProduct } from "../constance/action.enum";
import { AppDispatch, AppState } from "../store";
import { AxiosInstance } from 'axios'
export const productAction = (axiosHook: AxiosInstance) => async (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type:EProduct.PRODUCT_REQUEST })
    try {
        const product = await axiosHook.get('/api/product')
        dispatch({ type: EProduct.PRODUCT_SUCCESS, payload: product.data.payload })
    } catch (error) {
        dispatch({
            type: EProduct.PRODUCT_FAIL,
            error: error
        })
    }
} 