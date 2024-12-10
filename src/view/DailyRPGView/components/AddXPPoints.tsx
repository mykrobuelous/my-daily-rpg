import { twMerge } from 'tailwind-merge';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import ChipSelection from './ChipSelection';
import { useState } from 'react';
import { IDBrand } from '../../../utils/types/BrandType';

interface Props {
    className?: string;
}

const AddXPPoints: React.FC<Props> = ({ className }) => {
    const [experienceTypeID, setExperienceTypeID] = useState<IDBrand>();
    return (
        <div className={twMerge('flex flex-col gap-2', className)}>
            <div className="flex items-end gap-4">
                <Input label="Quest" className="flex-grow" />
                <Input label="XP Points" className="w-32" />
                <Button text="Add" className="w-24 p-1" />
            </div>
            <ChipSelection
                className="mt-2"
                selectedChip={{ state: experienceTypeID, setState: setExperienceTypeID }}
            />
        </div>
    );
};

export default AddXPPoints;
