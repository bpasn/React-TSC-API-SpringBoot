import axios, { AxiosError,AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../action/user.action'
// import { signOut } from '../action/user.action'
const axiosPrivate = axios.create({
    withCredentials: true,
    // timeout:5000
})

const useAxiosHook = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { userInfo } = useAppSelector(state => state.SignUser)
    useEffect(() => {
        axiosPrivate.interceptors.request.use(
            (config: InternalAxiosRequestConfig<any>) => {
                if (!config.headers["Authorization"]) {
                    if (userInfo?.token) {
                        config.headers["Authorization"] = `Bearer ${userInfo?.token}`
                    } else {
                        config.headers["Authorization"] = `Bearer `
                    }
                }
                return config
            },)
        axiosPrivate.interceptors.response.use(
            (response: AxiosResponse<any, any>) => {
                return response
            },
            (error: AxiosError<{
                "timestamp": Date;
                "status": number;
                "error": string;
                "message": string;
            }>) => {
                if (error.response?.status === 401) {
                    // return navigate("/login",{
                    //     state:{
                    //         form:"eii",
                    //         error:error
                    //     }
                    // })
                    // dispatch<any>(signOut())
                    return dispatch<any>({ type: "show", payload: { title: "Unauthorization", description: error.response.data && error.response.data.error ? error.response.data.error : error.message } })
                }
                return Promise.reject(error);
            },
            {
                runWhen: (config: InternalAxiosRequestConfig) => config.url !== "/login",
            }
        )
    }, [dispatch, navigate, userInfo])

    return axiosPrivate
}

export default useAxiosHook