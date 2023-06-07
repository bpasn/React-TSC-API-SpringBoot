import * as React from 'react';
import { ChangeEvent } from 'react';
import { SelectCuttom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle';

type SelectOption = {
    label: string;
    value: string;
};
export interface Options{
    name:string;
    id:string;
}
type Props = {
    value?: string;
    disabled?: boolean;
    className?: string;
    options?: Options[] | undefined;
    name?:string;
    defaultText?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};
// React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement

const SelectBox = ({
    value,
    disabled = false,
    name,
    defaultText,
    options = [],
    onChange,
}: Props) => {
    const selectBox = (
        <SelectCuttom
            onChange={onChange}
            name={name}
            disabled={disabled}
            defaultValue={value}>
            {defaultText && <option value={''}>{defaultText}</option>}
            {options.length && options.map((option: Options, index: number) => {
                return (<option
                    key={option.id}
                    value={option.name}>{option.name}
                </option>)
            })}
        </SelectCuttom>
    );

    return <>{selectBox}</>;
};

export { SelectBox };
export type { SelectOption };