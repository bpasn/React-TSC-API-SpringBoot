import { InputField, LabelForm } from '../page/auth/StyledAuth'
import { FormState, RegisterOptions, FieldValues, UseFormRegister, useForm } from "react-hook-form"
interface Props {
    label?: string;
    name: string;
    type?:string,
    marginBottom?: string;
    formState?: FormState<FieldValues>,
    register?: UseFormRegister<any>
    options?: RegisterOptions<FieldValues, any>

}
// UseFormRegister<FieldValues>

const InputComponent = ({
    label,
    type = "text",
    name,
    options,
    formState,
    register

}: Props) => {
    let err =formState?.errors[name];
    return (
        <div>
            <LabelForm>{label}</LabelForm>
            {register ? <InputField type={type} {...register(name, { ...options })} /> : <InputField name={name} />}
            {err && err.type === "required" && (
                <span role="alert" style={{marginTop:"20px"}}>{name.substring(0,1).toUpperCase() + name.substring(1)} is required</span>
            )}
            {err && err.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
            )}
        </div>
    )
}

export default InputComponent