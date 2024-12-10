import { twMerge } from 'tailwind-merge';
import AddXPPoints from './components/AddXPPoints';
import DailyQuestList from './components/DailyQuestList/DailyQuestList';

interface Props {
    className?: string;
}

const DailyRPGView: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex h-full flex-col gap-2 overflow-hidden px-8 py-5', className)}>
            <AddXPPoints className="rounded-md" />
            <DailyQuestList className="mt-5 h-full overflow-x-scroll" />
        </div>
    );
};

export default DailyRPGView;
