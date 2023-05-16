import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAppDispatch, useAppSelector } from '../hook'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { signOut } from '../action/user.action'
const axiosPrivate = axios.create({
    withCredentials: true
})

const useAxiosHook = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { userInfo } = useAppSelector(state => state.SignUser)
    useEffect(() => {
        axiosPrivate.interceptors.request.use(
            (config: InternalAxiosRequestConfig<any>) => {
                if (!config.headers["Authorization"]) {
                    if(userInfo?.token){
                        config.headers["Authorization"] = `Bearer ${userInfo?.token}`
                    }else{
                        config.headers["Authorization"] = `Bearer `
                    }
                }
                return config
            },
        )
        axiosPrivate.interceptors.response.use(
            (response:AxiosResponse<any,any>) => {
                return  response
            },
            (error:AxiosError) => {
                console.log({
                    ERROR:error
                })
                if(error.response?.status === 401){
                    localStorage.removeItem("userInfo");
                    dispatch<any>(signOut())
                    console.log({ERROR:error})
                    return navigate("/login",{
                        state:{
                            form:"eii",
                            error:error
                        }
                    })
                }
                return Promise.reject(error);
            },
            {
                runWhen: (config:InternalAxiosRequestConfig) => config.url !== "/login",
            }
        )
    }, [userInfo])

    return axiosPrivate
}

export default useAxiosHook