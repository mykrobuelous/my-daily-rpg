import { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../../context/MainProvider/useMainContext';
import { getDisabledDate } from '../../TestView/utils/getDisabledDates';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import Button from '../../../components/Button/Button';
import { generateID } from '../../../utils/function/generateID';
import { runToast } from '../../../lib/ReactHotToast/runToast';
import CusCheckIcon from '../../../lib/ReactHotToast/CusCheckIcon';

interface Props {
    className?: string;
    onClose: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const NewDateModal: React.FC<Props> = ({ className, onClose }) => {
    const [date, setDate] = useState<Value>(null);
    const { dayData, callAPI, selectedDayID } = useMainContext();

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

    const dateValue = Array.isArray(date) ? date[0] : date;

    return (
        <div
            className={twMerge(
                'z-20 flex h-fit w-fit flex-col gap-5 rounded-2xl bg-gray-900 p-5 shadow-2xl',
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <h2 className="text-2xl font-bold text-white">Add New Day</h2>
                <span className="rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium">
                    {dateValue ? dayjs(dateValue).format('MMMM DD, YYYY') : 'Select a date'}
                </span>
            </div>
            <Calendar
                onChange={setDate}
                value={date}
                className="rounded-lg text-black"
                tileDisabled={disableSpecificDates}
            />
            <div className="flex justify-between gap-10">
                <Button onClick={onClose} text="Close" className="h-8" variant="red" />
                <Button
                    onClick={() => {
                        if (!dateValue) return;
                        const newID = generateID();
                        callAPI({
                            call: 'LOCAL/ADD_DAY',
                            body: {
                                id: newID,
                                date: dateValue,
                            },
                        });
                        setDate(null);
                        selectedDayID.setState(newID);
                        runToast('New day has been added.', <CusCheckIcon />);
                        onClose();
                    }}
                    text="Add"
                    className="h-8"
                    disabled={!dateValue}
                />
            </div>
        </div>
    );
};

export default NewDateModal;
