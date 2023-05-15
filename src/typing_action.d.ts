interface ActionRequest {
    type: "REQUEST"
}
interface ActionResponse {
    type: "SUCCESS"
    payload?: any
}

interface ActionFail {
    type: "FAIL"
    error?: any
}
interface ActionSignOut {
    type: "SIGN_OUT"
}

export type Action = ActionRequest | ActionResponse | ActionFail | ActionSignOut


interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    token: string
}
interface ISignUer {
    loading?: boolean;
    userInfo?: IUser;
    error?: any
}


interface IProductRequest {
    type: "PRODUCT_REQUEST"
}
interface IProductRespnse {
    type: "PRODUCT_SUCCESS"
    payload?: any
}

interface IProductFail {
    type: "PRODUCT_FAIL"
    error?: any
}

export type IPorductAction = IProductRequest | IProductRespnse | IProductFail

interface IProduct {
    loading?: boolean;
    products?: [];
    error?: any
}