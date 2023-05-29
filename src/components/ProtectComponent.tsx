import React from 'react'
import { ERole } from '../constance/action.enum'
import { useAppSelector } from '../redux/hook'
import { Navigate, Outlet } from 'react-router-dom'
type Props = {}

const ProtectComponent = (props: Props) => {
    const userState = useAppSelector(state => state.SignUser)
    const { userInfo } = userState
    React.useEffect(() => {
        if(userInfo && userInfo.roles.includes(ERole.ROLE_ADMIN)){
            <Navigate to={'/admin'} replace />
            return
        }
    },[userInfo])
    return userInfo 
        ?   <Outlet />
        :  <Navigate to={'/signin'} replace />
    // <Navigate to={'/login'} replace />
}

export default ProtectComponent