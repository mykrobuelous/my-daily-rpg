import { twMerge } from 'tailwind-merge';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ChipSelection from './ChipSelection';
import { IDBrand } from '../../../utils/types/BrandType';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '../../../components/Select/Select';
import { XPType } from '../../../data/XPType';
import dayjs from 'dayjs';
import { generateID } from '../../../utils/function/generateID';
import { useMainContext } from '../../../context/MainProvider/useMainContext';
import { runToast } from '../../../lib/ReactHotToast/runToast';
import CusCheckIcon from '../../../lib/ReactHotToast/CusCheckIcon';
import {
    DefaultQuestValues,
    defaultQuestZodSchema,
} from '../../../utils/types/FormTypes/DefaultQuestTypes';

interface Props {
    className?: string;
}

const defaultValues: DefaultQuestValues = {
    quest: '',
    xpPoints: 0,
    type: '' as IDBrand,
    level: 'MIN',
};

const AddXPPoints: React.FC<Props> = ({ className }) => {
    const { selectedDayID, callAPI } = useMainContext();
    const { control, handleSubmit, reset } = useForm<DefaultQuestValues>({
        defaultValues,
        resolver: zodResolver(defaultQuestZodSchema),
    });

    const onSubmitForm = (data: DefaultQuestValues) => {
        const { quest, xpPoints, type, level } = data;

        const body: XPType = {
            id: generateID(),
            experienceID: type,
            datetimeCreated: dayjs().format('MM.DD.YYYY'),
            questDetails: {
                quest,
                points: xpPoints,
                level,
            },
        };

        try {
            callAPI({
                body,
                call: 'LOCAL/ADD_QUEST',
                params: selectedDayID.state?.id,
            });
            reset();
            runToast('Quest added successfully', <CusCheckIcon />);
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };

    return (
        <form
            className={twMerge('flex flex-col gap-4', className)}
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <div className="flex items-end gap-8">
                <Controller
                    name="quest"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Quest"
                            className="flex-grow"
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                <Controller
                    name="level"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Select
                            value={value}
                            onChange={onChange}
                            label="Level"
                            options={[
                                { value: 'MIN', label: 'MIN' },
                                { value: 'MID', label: 'MID' },
                                { value: 'MAX', label: 'MAX' },
                            ]}
                        />
                    )}
                />
                <Controller
                    name="xpPoints"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="XP Points"
                            className="w-20"
                            onChange={(e) =>
                                onChange(e.target.value === '' ? '' : Number(e.target.value))
                            }
                            value={value}
                            type="number"
                        />
                    )}
                />
            </div>
            <div className="flex justify-between">
                <Controller
                    name="type"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <ChipSelection selectedChip={{ state: value, setState: onChange }} />
                    )}
                />
                <Button text="Add" type="submit" className="w-56 p-1" />
            </div>
        </form>
    );
};

export default AddXPPoints;
