import { EProduct } from './../constance/action.enum';
import {  IPorductAction, IProduct } from "../interface/typing_action";

export const productReducer = (state: IProduct = {}, action: IPorductAction): IProduct => {
    switch (action.type) {
        case EProduct.PRODUCT_REQUEST:
            return { loading: true };
        case EProduct.PRODUCT_SUCCESS:
            return { loading: false, products: action.payload };
        case EProduct.PRODUCT_FAIL:
            return { loading: false, error: action.error };
        default:
            return state;
    }
}