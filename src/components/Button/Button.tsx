import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonTypeConfigs, ButtonTypeConfigsType } from './buttonTypeConfigs';

interface Props {
    className?: string;
    text?: string;
    Icon?: LucideIcon;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
    onClick?: () => void;
    variant?: ButtonTypeConfigsType;
    texttwClass?: string;
}

const Button: React.FC<Props> = ({
    className,
    text = 'Lorem Button',
    Icon,
    type = 'button',
    disabled = false,
    onClick,
    variant = 'blue',
    texttwClass,
}) => {
    const variantColor = useMemo(() => buttonTypeConfigs[variant], [variant]);

    return (
        <button
            className={twMerge(
                'flex w-full items-center justify-center gap-2.5 rounded-lg px-4 py-2.5 text-white',
                'shadow-sm hover:shadow-md',
                'active:scale-[0.98]',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'transition-all duration-200 ease-in-out',
                variantColor,
                className
            )}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {Icon && <Icon size={20} className="flex-shrink-0" />}
            <span className={twMerge('text-base font-semibold', texttwClass)}>{text}</span>
        </button>
    );
};

export default Button;
