import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ className, label, value, onChange, ...inputAttributes }) => {
    return (
        <div className={twMerge('flex flex-col gap-1', className)}>
            {label && <label className="text-sm font-medium">{label}</label>}
            <input
                className="rounded-lg border border-gray-300 p-2 pl-4 text-black shadow-inner outline-none"
                value={value}
                onChange={onChange}
                {...inputAttributes}
            />
        </div>
    );
};

export default Input;
