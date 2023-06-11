import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";


const TabsCustom = styled(Tabs)((root) => ({
    backgroundColor:"#fff",
    padding:"10px",
    position:"relative",
    zIndex:"10",
    borderRadius:"30px",
    minWidth:"80px"
}))
TabsCustom.defaultProps = {
    ...TabsCustom.defaultProps,
    TabIndicatorProps: {
        sx: {
            width:"calc(25%,-5px)",
            height:"40px",
            color:"#fff",
            borderRadius:"30px",
            transition:"all 300ms ease-in-out",
            backgroundColor: "#3232b7"
        }
    }
}
const TabCustom = styled(Tab)<{ active?: boolean }>((theme) => {
    return ({
        transition:"all 300ms ease-in-out",
        borderRadius: "30px",
        padding:"10px",
        minHeight:"40px",
        '&.Mui-selected': {
            zIndex:"10",
            color:"#fff"
        }
    })
})

TabCustom.defaultProps = {
    ...TabCustom.defaultProps,
    disableTouchRipple: true
}
export {
    TabsCustom,
    TabCustom
}