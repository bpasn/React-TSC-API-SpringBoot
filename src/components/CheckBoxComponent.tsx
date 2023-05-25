import React from 'react'
import { CheckBoxCustom, CustomBox, LabelCustom } from '../page/auth/StyledAuth'
import { Box } from '@mui/material'
import { FormState, RegisterOptions, FieldValues, UseFormRegister, useForm } from "react-hook-form"

type Props = {
    id: string;
    name: string;
    label?: string;
    value: string;
    formState?: FormState<FieldValues>,
    register?: UseFormRegister<any>
    options?: RegisterOptions<FieldValues, any>
}

const CheckBoxComponent = ({ value, label, id, options,
    formState,
    name,
    register }: Props) => {
    console.log(name)
    let err = formState?.errors[name];
    let ref = err?.ref as HTMLInputElement;
    console.log(
        {
            formState,
            name,
            err,
            ref,
        }
    )
    return (
        <Box marginBottom="1rem">
            <Box display={"flex"} justifyContent={"center"} >
                <CustomBox sx={{
                    marginRight: "1rem"
                }}>
                    <CheckBoxCustom {...register?.(name, { ...options })} id={id} type='checkbox' />
                    <LabelCustom htmlFor={id}>{label}</LabelCustom>
                </CustomBox>
            </Box>
            {err && err.type === 'required' && !ref.checked && (
                <div style={{textAlign:"center"}}>
                    <span role="alert" style={{ marginTop: "20px", textAlign: "center" }}>Pleas checked to continute</span>
                </div>
            )}
        </Box>
    )
}

export default CheckBoxComponent