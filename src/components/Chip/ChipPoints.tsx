import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    content: string;
    color?: string;
    prefix?: string;
}

const ChipPoints: React.FC<Props> = ({
    className,
    content = 'Lorem',
    color = 'bg-green-500/10 text-green-400',
    prefix,
}) => {
    return (
        <div className={twMerge('flex flex-col items-end gap-2', className)}>
            <div
                className={twMerge(
                    `flex-center m-w-[72px] items-center rounded-full px-3 py-1`,
                    color
                )}
            >
                <span className="flex text-sm font-bold">
                    {`${content}${prefix ? ` ${prefix}` : ''}`}
                </span>
            </div>
        </div>
    );
};

export default ChipPoints;
