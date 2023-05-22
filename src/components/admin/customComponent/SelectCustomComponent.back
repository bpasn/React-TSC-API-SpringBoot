import React, { ChangeEvent } from 'react'
import { SelectCuttom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'

type Props = {
    listOption: string[];
    name:string;
    value: string;
    defaultText?:string;
    setState?: React.Dispatch<React.SetStateAction<any>>;
    changeHandle?:(param:any) => any;
} & React.HTMLAttributes<HTMLOrSVGElement>;
// React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement
const SelectCustomComponent: React.FC<Props> = ({ changeHandle,defaultText,name,listOption, value, setState }: Props) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setState?.(event.target.value)
    };
    return <SelectCuttom
        name={name}
        onChange={changeHandle}
        value={value}
    >
        {defaultText && <option  value={''}>{defaultText}</option>}
        {listOption.map((option: string, index: number) => {
            return (<option 
                    key={option}
                    value={option}>{option}
                    </option>)
        })}
    </SelectCuttom>
}

export default SelectCustomComponent