import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    text?: string;
    Icon?: LucideIcon;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
}

const Button: React.FC<Props> = ({
    className,
    text = 'Lorem Button',
    Icon,
    type = 'button',
    disabled = false,
}) => {
    return (
        <button
            className={twMerge(
                'flex w-full items-center justify-center gap-2.5 rounded-lg px-4 py-2.5',
                'bg-blue-600 text-white',
                'shadow-sm hover:bg-blue-700 hover:shadow-md',
                'active:scale-[0.98] active:bg-blue-800',
                'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600',
                'transition-all duration-200 ease-in-out',
                className
            )}
            type={type}
            disabled={disabled}
        >
            {Icon && <Icon size={20} className="flex-shrink-0" />}
            <span className="text-base font-semibold">{text}</span>
        </button>
    );
};

export default Button;
