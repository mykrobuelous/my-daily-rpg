import { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import { getDisabledDate } from './utils/getDisabledDates';

interface Props {
    className?: string;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TestView: React.FC<Props> = ({ className }) => {
    const [date, setDate] = useState<Value>(new Date());
    const { dayData } = useMainContext();

    const disabledDates = getDisabledDate(dayData, 'MM.DD.YYYY', 'date');

    const disableSpecificDates = useCallback(
        ({ date, view }: { date: Date; view: string }) => {
            return (
                view === 'month' &&
                disabledDates.some((disabledDate) => dayjs(disabledDate).isSame(dayjs(date), 'day'))
            );
        },
        [disabledDates]
    );

    return (
        <div className={twMerge('flex-center rounded-md', className)}>
            <Calendar
                onChange={setDate}
                value={date}
                className="rounded-lg text-black"
                tileDisabled={disableSpecificDates}
            />
        </div>
    );
};

export default TestView;
