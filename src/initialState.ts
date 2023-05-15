import { IUser } from "./typing_action"

// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/consistent-type-assertions
export default <InitialState>{
    SignUser: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null
    }
}

interface InitialState {
    SignUser: {
        userInfo: IUser
    }
}

