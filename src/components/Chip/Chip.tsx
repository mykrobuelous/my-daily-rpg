import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    label: string;
    color?: string;
    cursor?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

const Chip: React.FC<Props> = ({
    className,
    label = 'DFT',
    color = '#589e41',
    cursor = true,
    selected = false,
    onClick,
}) => {
    return (
        <div
            className={twMerge(
                'flex-center min-w-20 rounded-full border-2 px-4 py-1',
                cursor ? 'cursor-pointer' : '',
                className
            )}
            style={{ backgroundColor: selected ? color : 'transparent', borderColor: color }}
            onClick={onClick}
        >
            <p className="text-sm font-bold">{label}</p>
        </div>
    );
};

export default Chip;
