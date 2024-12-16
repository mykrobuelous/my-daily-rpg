import { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    label?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {
        value: string;
        label: string;
    }[];
}

const Select: React.FC<Props> = ({
    className,
    label,
    value,
    onChange,
    options,
    ...selectAttributes
}) => {
    return (
        <div className={twMerge('flex flex-col gap-1', className)}>
            {label && <label className="text-sm font-medium">{label}</label>}
            <select
                className="cursor-pointer rounded-lg border border-gray-300 p-2 text-black shadow-inner outline-none"
                value={value}
                onChange={onChange}
                {...selectAttributes}
            >
                {options.map((optionsItem) => (
                    <option key={optionsItem.value} value={optionsItem.value}>
                        {optionsItem.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
