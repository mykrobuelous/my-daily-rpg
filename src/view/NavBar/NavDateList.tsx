import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import { Calendar } from 'lucide-react';
import useData from '@/hooks/useData';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import { DayType } from '@/types/datatypes/day.types';
import LogoText from '@/components/LogoText/LogoText';

interface Props {
    className?: string;
}

const NavDateList: React.FC<Props> = ({ className }) => {
    const { dayDataState } = useData();

    const { selectedDay } = useMainStore();

    if (!dayDataState.data) return null;

    const formattedDayData: DayType[] = [...dayDataState.data].sort((a, b) =>
        dayjs(b.date, 'MM.DD.YYYY').diff(dayjs(a.date, 'MM.DD.YYYY'))
    );

    return (
        <div className={twMerge('flex h-full flex-col gap-1', className)}>
            {formattedDayData.map((dayItem) => {
                return (
                    <LogoText
                        size={'xs'}
                        key={dayItem.id}
                        text={`${dayjs(dayItem.date, 'MM.DD.YYYY').format('MMM D, YYYY')} (${dayItem.QuestXP.length})`}
                        className={twMerge(
                            'cursor-pointer gap-2 p-2 pl-4 transition-all duration-200',
                            'hover:translate-x-1 hover:bg-gray-700/50',
                            'border-l-2 border-transparent',
                            selectedDay.get?.id === dayItem.id
                                ? 'rounded-lg border-l-2 border-blue-500 bg-gray-800 shadow-md'
                                : 'hover:border-gray-600'
                        )}
                        Logo={Calendar}
                        onClick={() => {
                            selectedDay.set(dayItem.id);
                        }}
                    />
                );
            })}
        </div>
    );
};

export default NavDateList;
