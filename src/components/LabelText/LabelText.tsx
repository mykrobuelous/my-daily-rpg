import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    children: ReactNode;
    label?: string;
    Icon?: LucideIcon;
}

const LabelText: React.FC<Props> = ({ className, children, label = 'Lorem Ipsum', Icon }) => {
    return (
        <div className={twMerge('flex flex-col', className)}>
            <div className="flex items-center gap-2 text-gray-400">
                {Icon && <Icon size={12} />}
                <p className="text-xs">{label}</p>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default LabelText;
