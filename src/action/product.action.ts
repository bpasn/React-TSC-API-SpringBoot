import { EProduct } from "../constance/action.enum";
import { AppDispatch, AppState } from "../redux/store";
import { AxiosError, AxiosInstance } from 'axios'
import AppSetting from "../constance/AppSetting";
export const productAction = (axiosHook: AxiosInstance) => async (dispatch: AppDispatch, getState: AppState) => {
    dispatch({ type: EProduct.PRODUCT_REQUEST })
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

export const insertProductImage = (axiosHook: AxiosInstance, body: IInsertImageProductRequest) => async (dispatch: AppDispatch) => {
    dispatch({ type: EProduct.PRODUCT_REQUEST })
    dispatch<any>({ type: 'SHOW_LOADING' })
    try {
        const { data } = await axiosHook.post(AppSetting.INSERT_IMAGE_PRODUCT, body, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        setTimeout(() => {
            dispatch<any>({ type: 'HIDE_LOADING' })
            dispatch({ type: EProduct.PRODUCT_SUCCESS, payload: data})
            dispatch({
                type: "SHOW", payload: {
                    message: "INSERT PRODUCT SUCCESS",
                    status: true,
                    severity: "success"
                }
            })
        },3*1000)
       

    } catch (error) {
        dispatch({
            type: "SHOW", payload: {
                message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
                status: true,
                severity: "error"
            }
        })
    }
}
