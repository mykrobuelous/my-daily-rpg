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
        <div className={twMerge('flex flex-col', className)}>
            {label && <p className="font-semibold">{label}</p>}
            <input
                className="p-2 pl-4 text-black border rounded"
                value={value}
                onChange={onChange}
                {...inputAttributes}
            />
        </div>
    );
};

export default Input;
