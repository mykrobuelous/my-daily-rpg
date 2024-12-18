import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    text: string;
    Icon?: undefined | ReactNode;
    onClick?: () => void;
}

const CustomToast: React.FC<Props> = ({ className, text, Icon, onClick }) => {
    return (
        <div
            className={twMerge('flex cursor-pointer items-center gap-2', className)}
            onClick={onClick}
        >
            {Icon}
            <p className="text-gray-800">{text}</p>
        </div>
    );
};

export default CustomToast;
