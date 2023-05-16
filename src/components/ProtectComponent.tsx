import React, { useState } from 'react'
import { useAppSelector } from '../hook'
import { Navigate, Outlet } from 'react-router-dom'
type Props = {}

const ProtectComponent = (props: Props) => {
    const userState = useAppSelector(state => state.SignUser)
    const { userInfo } = userState
    const [parent,setParent] = useState<string[] | undefined>(userInfo?.roles)

    
    return userInfo ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectComponent