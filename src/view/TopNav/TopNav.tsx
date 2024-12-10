import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import dayjs from 'dayjs';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    const { selectedDayID } = useMainContext();
    return (
        <div className={twMerge('flex px-7 py-2', className)}>
            <div className="flex flex-col">
                <p className="text-xs text-gray-400">Selected Date</p>
                <p className="text-lg font-bold">
                    {dayjs(selectedDayID.state?.date).format('MMMM DD, YYYY')}
                </p>
            </div>
        </div>
    );
};

export default TopNav;
