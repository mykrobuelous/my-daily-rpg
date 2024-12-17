import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import LogoText from '../../components/LogoText/LogoText';
import dayjs from 'dayjs';
import { Calendar } from 'lucide-react';

interface Props {
    className?: string;
}

const NavDateList: React.FC<Props> = ({ className }) => {
    const { dayData, selectedDayID } = useMainContext();
    return (
        <div className={twMerge('flex h-full flex-col gap-1', className)}>
            {dayData
                .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))
                .map((dayItem) => {
                    return (
                        <LogoText
                            size={'xs'}
                            key={dayItem.id}
                            text={dayjs(dayItem.date, 'MM.DD.YYYY').format('MMMM D, YYYY')}
                            className={twMerge(
                                'cursor-pointer gap-2 p-2 pl-4 transition-all duration-200',
                                'hover:translate-x-1 hover:bg-gray-700/50',
                                'border-l-2 border-transparent',
                                selectedDayID.state?.id === dayItem.id
                                    ? 'rounded-lg border-l-2 border-blue-500 bg-gray-800 shadow-md'
                                    : 'hover:border-gray-600'
                            )}
                            Logo={Calendar}
                            onClick={() => {
                                selectedDayID.setState(dayItem.id);
                            }}
                        />
                    );
                })}
        </div>
    );
};

export default NavDateList;
