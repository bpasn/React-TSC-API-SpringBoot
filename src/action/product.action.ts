import Constants from "../static/static.cont";
import { AppDispatch, AppState } from "../store";
import { AxiosInstance, AxiosResponse } from 'axios'
export const productAction = (axiosHook: AxiosInstance) => async (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type: "PRODUCT_REQUEST" })
    try {
        const product:AxiosResponse<IProducts, any> = await axiosHook.get(Constants.GET_ALL_PRODUCT)
        dispatch({ type: "PRODUCT_SUCCESS", payload: product.data })
    } catch (error) {
        dispatch({
            type: "PRODUCT_FAIL",
            error: error
        })
    }
} 