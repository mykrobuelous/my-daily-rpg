import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: LucideIcon;
}

const Input: React.FC<Props> = ({
    className,
    label,
    value,
    onChange,
    icon,
    ...inputAttributes
}) => {
    const PrefixIcon = icon;
    return (
        <div className={twMerge('flex w-full flex-col gap-1', className)}>
            {label && <label className="text-sm font-medium">{label}</label>}
            <div className="flex h-10 w-full">
                {PrefixIcon && (
                    <div className="flex-center h-full w-10 rounded-l-lg bg-white pl-2">
                        <PrefixIcon className="text-gray-500" size={24} />
                    </div>
                )}
                <input
                    className={twMerge(
                        'w-full p-2 text-black outline-none',
                        PrefixIcon ? 'rounded-r-lg' : 'rounded-lg pl-4'
                    )}
                    value={value}
                    onChange={onChange}
                    {...inputAttributes}
                />
            </div>
        </div>
    );
};

export default Input;
