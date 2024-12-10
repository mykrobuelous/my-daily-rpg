import { twMerge } from 'tailwind-merge';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ChipSelection from './ChipSelection';
import { IDBrand } from '../../../utils/types/BrandType';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
    className?: string;
}

const defaultValuesSchema = z.object({
    quest: z.string().min(3, 'Quest must be at least 3 characters long'),
    xpPoints: z.number(),
    type: z.string().min(3, 'Type must be selected'),
});

type DefaultValuesType = {
    quest: string;
    xpPoints: number;
    type: IDBrand;
};

const defaultValues: DefaultValuesType = {
    quest: '',
    xpPoints: 0,
    type: '' as IDBrand,
};

const AddXPPoints: React.FC<Props> = ({ className }) => {
    const { control, handleSubmit } = useForm<DefaultValuesType>({
        defaultValues,
        resolver: zodResolver(defaultValuesSchema),
    });

    const onSubmitForm = (data: DefaultValuesType) => {
        console.log({ data });
    };

    return (
        <form
            className={twMerge('flex flex-col gap-4', className)}
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <div className="flex items-end gap-4">
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
                    name="xpPoints"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="XP Points"
                            className="w-32"
                            onChange={(e) =>
                                onChange(e.target.value === '' ? '' : Number(e.target.value))
                            }
                            value={value}
                            type="number"
                            max={100}
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
