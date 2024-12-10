import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    label?: string;
    inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ className, label, ...inputAttributes }) => {
    return (
        <div className={twMerge('flex flex-col', className)}>
            {label && <p className="font-semibold">{label}</p>}
            <input className="p-2 pl-4 text-black border rounded" {...inputAttributes} />
        </div>
    );
};

export default Input;
