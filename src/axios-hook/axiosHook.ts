import axios, { InternalAxiosRequestConfig } from 'axios'
import { useAppSelector } from '../hook'
import { useEffect } from 'react'
const axiosPrivate = axios.create({
    withCredentials: true
})

const useAxiosHook = () => {
    const { userInfo } = useAppSelector(state => state.SignUser)
    useEffect(() => {
        axiosPrivate.interceptors.request.use(
            (config: InternalAxiosRequestConfig<any>) => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${userInfo?.token}`
                }
                return config
            },
        )
    }, [userInfo])

    return axiosPrivate
}

export default useAxiosHook