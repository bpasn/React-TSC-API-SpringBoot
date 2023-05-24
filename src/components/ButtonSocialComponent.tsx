import React from 'react'
import { ButtonSocial, IConSocial } from '../page/auth/StyledAuth'

type Props = {
    social?: string;
    faIcon: string;
    onClick?:() => void
}

const ButtonSocialComponent = (props: Props) => {
    return (
        <ButtonSocial onClick={props.onClick} type='button' social={props.social} >
            <IConSocial className={'fa ' + props.faIcon} />
        </ButtonSocial>
    )
}

export default ButtonSocialComponent