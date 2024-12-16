import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    level?: number;
}

const RPGLevel: React.FC<Props> = ({ className, level = 12 }) => {
    return (
        <div
            className={twMerge(
                'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-yellow-400 bg-gradient-to-r from-yellow-500 to-yellow-700 font-bold text-white shadow-lg',
                className
            )}
        >
            {level}
        </div>
    );
};

export default RPGLevel;
