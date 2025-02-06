import useLevel from '@/hooks/useLevel';
import { twMerge } from 'tailwind-merge';
interface Props {
    className?: string;
}

const RPGLevel: React.FC<Props> = ({ className }) => {
    const { overAllLevel } = useLevel();

    return (
        <div
            className={twMerge(
                'font-radio flex-center h-12 w-12 cursor-pointer rounded-full bg-gray-100 text-2xl font-bold text-gray-700 transition-colors hover:bg-gray-200',
                className
            )}
        >
            {overAllLevel.playerLevel}
        </div>
    );
};

export default RPGLevel;
