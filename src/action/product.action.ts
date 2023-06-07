import { EProduct } from "../constance/action.enum";
import { AppDispatch, AppState } from "../redux/store";
import axios, { AxiosError, AxiosInstance } from 'axios'
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
export const loadingPage = (axiosHook: AxiosInstance) => async (dispatch: AppDispatch) => {
    dispatch({ type: EProduct.LOAD_PAGE_REQUEST })
    try {
        const { data } = await axios.get<ILoadingPage[]>(AppSetting.LOAD_PAGE);
        dispatch({ type: EProduct.LOAD_PAGE_SUCCESS, payload: data })
    } catch (error) {
        let _error = error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message)
        dispatch({
            type: EProduct.LOAD_PAGE_FAIL,
            error: _error
        })
        dispatch<{
            type: "SHOW" | "HIDE";
            payload: IError;
        }>({
            type: "SHOW", payload: {
                message: _error,
                errorStatus: false,
                severity: "error"
            }
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
            dispatch({ type: EProduct.PRODUCT_SUCCESS, payload: data })
            dispatch({
                type: "SHOW", payload: {
                    message: "INSERT PRODUCT SUCCESS",
                    errorStatus: true,
                    severity: "success"
                }
            })
        }, 3 * 1000)


    } catch (error) {
        dispatch({
            type: "SHOW", payload: {
                message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
                errorStatus: true,
                severity: "error"
            }
        })
    }
}
