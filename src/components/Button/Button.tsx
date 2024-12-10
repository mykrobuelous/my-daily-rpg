import { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    text?: string;
    Icon?: LucideIcon;
}

const Button: React.FC<Props> = ({ className, text = 'Lorem Button', Icon }) => {
    return (
        <button
            className={twMerge('w-full bg-blue-800 rounded-full p-2 flex-center gap-2', className)}
        >
            {Icon && <Icon size={24} />}
            <p className="text-lg font-semibold">{text}</p>
        </button>
    );
};

export default Button;
