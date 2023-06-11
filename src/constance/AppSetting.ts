export default class AppSetting {
    static readonly URI_SIGNIN = "/api/auth/signin";
    static readonly URI_SIGNUP = "/api/auth/signup";

    static readonly URI_PRODUCT_CREATE = "/api/product/create";
    static readonly URI_PRODUCT_GET = "/api/product/get";
    static readonly URI_PRODUCT_GET_ALL = "/api/product/get-all";

    static readonly SIGNIN_REQUEST = "SIGNIN_REQUEST";
    static readonly SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
    static readonly SIGNIN_FAIL = "SIGNIN_FAIL";
    static readonly SIGN_OUT = "SIGN_OUT";

    static readonly PRODUCT_REQUEST = "PRODUCT_REQUEST";
    static readonly PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
    static readonly PRODUCT_FAIL = "PRODUCT_FAIL";
    static readonly INSERT_IMAGE_PRODUCT = "/api/product/insert-image-product";
    static readonly UPDATE_IMAGE_PRODUCT = "/api/product/update-image-product";
    static readonly LOAD_PAGE = "/api/product/loading-page";
    static readonly GET_CATEGORIES = "/api/categories/get-all";
}