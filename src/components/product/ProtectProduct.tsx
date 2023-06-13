import { useAppSelector } from '../../redux/hook'
import { Navigate, Outlet } from 'react-router-dom'
type Props = {}

const ProtectProduct = (props: Props) => {
    const userState = useAppSelector(state => state.SignUser)
    const { userInfo } = userState

    return userInfo?.roles?.includes("ROLE_ADMIN") ? <Navigate to={"/admin/ecommerce"}/> : <Outlet />
    //  : <Navigate to={'/Execption'} replace state={{
    //     form: location.pathname,
    //     message: "Access denide",
    //     status: 403,
    //     image:"https://gitlab.litespeedtech.com/preview/cpanel/img/troubleshoot/403.png"
    // }} />
}

export default ProtectProduct