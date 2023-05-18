import { styled } from '@mui/material'
import React from 'react'

interface Props{
    children?: React.ReactNode | React.ReactElement
}

export const FormGroup = styled('div')({
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + .75rem + 10px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor:'#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '30px',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
})
export const InputControl = styled('input')({
    fontSize:"14px",
    border:"none"
})
const InputCustomComponent: React.FC<Props> = ({children}: Props) => {
    return (
        <FormGroup>
            <InputControl/>
        </FormGroup>
    )
}

export default InputCustomComponent