import { twMerge } from 'tailwind-merge';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IDBrand } from '../../../utils/types/BrandType';
import { z } from 'zod';
import { XPType } from '../../../data/XPType';
import { generateID } from '../../../utils/function/generateID';
import dayjs from 'dayjs';
import Select from '../../../components/Select/Select';
import ChipSelection from '../../DailyRPGView/components/ChipSelection';

interface Props {
    className?: string;
    onClose?: () => void;
}

const defaultValuesSchema = z.object({
    quest: z.string().min(3, 'Quest must be at least 3 characters long'),
    xpPoints: z.number(),
    type: z.string().min(3, 'Type must be selected'),
    level: z.string(),
});

type DefaultValuesType = {
    quest: string;
    xpPoints: number;
    type: IDBrand;
    level: 'MIN' | 'MID' | 'MAX';
};

const defaultValues: DefaultValuesType = {
    quest: '',
    xpPoints: 0,
    type: '' as IDBrand,
    level: 'MIN',
};

const UpdateQuestModal: React.FC<Props> = ({ className }) => {
    const { control, handleSubmit } = useForm<DefaultValuesType>({
        defaultValues,
        resolver: zodResolver(defaultValuesSchema),
    });

    const onSubmitForm = (data: DefaultValuesType) => {
        console.log({ data });
    };
    return (
        <div
            className={twMerge(
                'flex flex-col gap-3 rounded-xl bg-gray-600 p-6 shadow-2xl',
                className
            )}
        >
            <div>
                <p className="text-2xl font-semibold">Update Quest</p>
            </div>
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
            <Button text="Close" variant="blue" />
        </div>
    );
};

export default UpdateQuestModal;
