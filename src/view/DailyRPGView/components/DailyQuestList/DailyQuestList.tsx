import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../../../context/MainProvider/useMainContext';
import DailyQuestItem from './DailyQuestItem';

interface Props {
    className?: string;
}

const DailyQuestList: React.FC<Props> = ({ className }) => {
    const {
        selectedDayID: { state: selectedDay },
    } = useMainContext();

    return (
        <div className={twMerge('flex flex-col', className)}>
            {selectedDay?.QuestXP.map((questItem) => (
                <DailyQuestItem key={questItem.id} questItem={questItem} />
            ))}
        </div>
    );
};

export default DailyQuestList;
