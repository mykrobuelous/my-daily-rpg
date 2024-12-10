import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface Props {
    className?: string;
}

const AddXPPoints: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex items-end gap-4', className)}>
            <Input label="Quest" className="flex-grow" />
            <Input label="XP Points" className="w-32" />
            <Button text="Add" className="w-24 p-1" />
        </div>
    );
};

export default AddXPPoints;
