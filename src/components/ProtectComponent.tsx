import { useAppSelector } from '../redux/hook'
import { Navigate, Outlet } from 'react-router-dom'
type Props = {}

const ProtectComponent = (props: Props) => {
    const userState = useAppSelector(state => state.SignUser)
    const { userInfo } = userState
    return userInfo ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectComponent