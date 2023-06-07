import { AxiosError } from "axios"
import { Sign, EProduct } from "../constance/action.enum"


interface ActionRequest {
    type: Sign.SIGNIN_REQUEST
}
interface ActionResponse {
    type: Sign.SIGNIN_SUCCESS
    payload?: any
}

interface ActionFail {
    type: Sign.SIGNIN_FAIL
    error?: any
}
interface ActionSignOut {
    type: Sign.SIGN_OUT,
    popup?: boolean;
    callback?: (param: any) => any;
}

export type Action = ActionRequest | ActionResponse | ActionFail | ActionSignOut


export type SignUp = {
    type: Sign.SIGN_UP_REQUEST
} | { type: Sign.SIGN_UP_SUCCESS } | { type: Sign.SIGN_UP_FAIL }

interface IUser {
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    token: string,
    roles: string[]
}
interface ISignUer {
    loading?: boolean;
    userInfo?: IUser;
    error?: any
}


interface IProductRequest {
    type: EProduct.PRODUCT_REQUEST
}
interface IProductRespnse {
    type: EProduct.PRODUCT_SUCCESS
    payload?: any
}

interface IProductFail {
    type: EProduct.PRODUCT_FAIL
    error?: any
}

export type IPorductAction = IProductRequest | IProductRespnse | IProductFail

interface IProduct {
    loading?: boolean;
    products?: [];
    error?: any
}

export type IPopupAction = { type: "show", payload: IPopup } | { type: "hide" }


interface ILoadRequest {
    type: EProduct.LOAD_PAGE_REQUEST
}
interface ILoadSuccess {
    type: EProduct.LOAD_PAGE_SUCCESS
    payload: ILoadingPage[]
}

interface ILoadFail {
    type: EProduct.LOAD_PAGE_FAIL
    error: Error | AxiosError | undefined | any
}
export type LoadPageAction =  ILoadFail | ILoadRequest | ILoadSuccess
interface ILoadPage {
    loading: boolean, 
    error: any, 
    loadPage: ILoadingPage[]
}