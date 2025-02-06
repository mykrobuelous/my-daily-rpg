import { ExpColorType } from '@/types/datatypes/experience.types';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    label: string | number;
    color?: ExpColorType;
    cursor?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

const Chip: React.FC<Props> = ({
    className,
    label = 'DFT',
    color = {
        background: 'bg-white',
        text: 'text-white',
        border: 'border-white',
    },
    cursor = true,
    selected = false,
    onClick,
}) => {
    return (
        <div
            className={twMerge(
                'inline-flex items-center justify-center',
                'h-8 min-w-[5rem] rounded-full border-2',
                'shadow-sm hover:shadow-md',
                selected ? color.background : '',
                selected ? 'text-white' : color.text,
                color.border,
                cursor ? 'cursor-pointer' : '',

                className
            )}
            onClick={onClick}
        >
            <span className="px-3 text-sm font-bold tracking-wide">{label}</span>
        </div>
    );
};

export default Chip;
