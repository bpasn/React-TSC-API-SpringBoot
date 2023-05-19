import * as React from 'react';
import { ChangeEvent } from 'react';
import { SelectCuttom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle';

type SelectOption = {
    label: string;
    value: string;
};

type Props = {
    value?: string;
    disabled?: boolean;
    className?: string;
    options: string[];
    name?:string;
    defaultText?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({
    value,
    disabled = false,
    name,
    defaultText,
    options,
    onChange,
}: Props) => {
    const selectBox = (
        <SelectCuttom
        onChange={onChange}
        name={name}
        disabled={disabled}
        defaultValue={value}>
            {defaultText && <option value={''}>{defaultText}</option>}
            {options.map((option: string, index: number) => {
                return (<option
                    key={option}
                    value={option}>{option}
                </option>)
            })}
        </SelectCuttom>
    );

    return <>{selectBox}</>;
};

export { SelectBox };
export type { SelectOption };