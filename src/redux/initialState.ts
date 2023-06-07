import { IUser } from "../interface/typing_action"

// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/consistent-type-assertions
export default <InitialState>{
    SignUser: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null
    },
    Popup: {
        settingPopup: false
    },
    Error: {
        message: "",
        errorStatus: false,
        severity: 'success'
    },
    LoadingProgress: {
        loading: false
    }
}

interface InitialState {
    SignUser: {
        userInfo: IUser
    },
    Popup: IPopup,
    Error: IError,
    LoadingProgress: { loading: boolean }
}


