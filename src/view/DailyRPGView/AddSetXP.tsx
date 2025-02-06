import Button from '@/components/Button/Button';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const AddSetXP: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('', className)}>
            <Button text="Sets" />
        </div>
    );
};

export default AddSetXP;
