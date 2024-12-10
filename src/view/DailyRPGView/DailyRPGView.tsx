import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import dayjs from 'dayjs';
import AddXPPoints from './components/AddXPPoints';

interface Props {
    className?: string;
}

const DailyRPGView: React.FC<Props> = ({ className }) => {
    const { selectedDayID } = useMainContext();
    return (
        <div className={twMerge('flex flex-col px-10 py-5', className)}>
            <p className="text-2xl font-bold">
                {dayjs(selectedDayID.state?.date).format('MMMM DD, YYYY')}
            </p>
            <AddXPPoints className="mt-3 rounded-md" />
        </div>
    );
};

export default DailyRPGView;
