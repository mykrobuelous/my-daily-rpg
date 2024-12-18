import { twMerge } from 'tailwind-merge';
import Button from '../../components/Button/Button';
import { Calendar1 } from 'lucide-react';
import { runToast } from '../../lib/ReactHotToast/runToast';

interface Props {
    className?: string;
}

const TestView: React.FC<Props> = ({ className }) => {
    const onClick = () => {
        runToast('Test');
    };

    return (
        <div className={twMerge('flex-center rounded-md', className)}>
            <Button Icon={Calendar1} text="Test" onClick={onClick} />
        </div>
    );
};

export default TestView;
