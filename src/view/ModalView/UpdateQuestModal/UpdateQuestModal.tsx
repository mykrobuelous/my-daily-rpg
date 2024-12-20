import { twMerge } from 'tailwind-merge';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '../../../components/Select/Select';
import ChipSelection from '../../DailyRPGView/components/ChipSelection';
import {
    DefaultQuestValues,
    defaultQuestZodSchema,
} from '../../../utils/types/FormTypes/DefaultQuestTypes';
import { RefreshCcw } from 'lucide-react';

interface Props {
    className?: string;
    onConfirm: (questValues: DefaultQuestValues) => void;
    onClose: () => void;
    updateQuest: DefaultQuestValues;
}

const UpdateQuestModal: React.FC<Props> = ({ className, updateQuest, onClose, onConfirm }) => {
    const {
        control,
        handleSubmit,
        formState: { isValid },
        watch,
        reset,
    } = useForm<DefaultQuestValues>({
        defaultValues: updateQuest,
        resolver: zodResolver(defaultQuestZodSchema),
    });

    const fieldValues = watch();

    const isFormChanged = JSON.stringify(fieldValues) !== JSON.stringify(updateQuest);

    const onSubmitForm = (data: DefaultQuestValues) => {
        onConfirm(data);
        onClose();
    };
    return (
        <div
            className={twMerge(
                'flex flex-col gap-4 rounded-xl bg-gray-900 p-6 shadow-2xl',
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <h2 className="text-2xl font-bold text-white">Add New Day</h2>
                <RefreshCcw
                    className={twMerge(
                        'cursor-default text-gray-600',
                        isFormChanged ? 'cursor-pointer text-white hover:text-yellow-600' : ''
                    )}
                    onClick={() => {
                        if (isFormChanged) reset(updateQuest);
                    }}
                />
            </div>
            <form className={twMerge('flex flex-col gap-2', className)}>
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
                </div>
                <div className="flex gap-4">
                    <Controller
                        name="level"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Select
                                value={value}
                                onChange={onChange}
                                label="Level"
                                className="flex-grow"
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
                <div className="mt-2 flex justify-between">
                    <Controller
                        name="type"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <ChipSelection selectedChip={{ state: value, setState: onChange }} />
                        )}
                    />
                </div>
            </form>
            <div
                className={twMerge(
                    'mt-4 flex justify-between gap-10',
                    'border-t border-gray-700 pt-4'
                )}
            >
                <Button text="Close" variant="red" className="h-8" onClick={onClose} />
                <Button
                    text="Save"
                    onClick={handleSubmit(onSubmitForm)}
                    className="h-8"
                    variant="blue"
                    disabled={!isValid || !isFormChanged}
                />
            </div>
        </div>
    );
};

export default UpdateQuestModal;
