import { Action, IPorductAction, IProduct } from "../typing_action";

export const productReducer = (state: IProduct = {}, action: IPorductAction): IProduct => {
    switch (action.type) {
        case "PRODUCT_REQUEST":
            return { loading: true };
        case "PRODUCT_SUCCESS":
            return { loading: false, products: action.payload };
        case "PRODUCT_FAIL":
            return { loading: false, error: action.error };
        default:
            return state;
    }
}