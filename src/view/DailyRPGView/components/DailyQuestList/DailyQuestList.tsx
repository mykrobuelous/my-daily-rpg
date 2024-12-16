import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../../../context/MainProvider/useMainContext';
import DailyQuestItem from './DailyQuestItem';

interface Props {
    className?: string;
}

const DailyQuestList: React.FC<Props> = ({ className }) => {
    const {
        selectedDayID: { state: selectedDay },
        callAPI,
    } = useMainContext();

    return (
        <div className={twMerge('flex flex-col', className)}>
            {selectedDay?.QuestXP.length === 0 ? (
                <div className="view-full flex justify-center">
                    <p className="mt-8 text-lg font-bold">No Quests for Today</p>
                </div>
            ) : (
                selectedDay?.QuestXP.map((questItem) => (
                    <DailyQuestItem
                        key={questItem.id}
                        questItem={questItem}
                        onTrash={() => {
                            console.log('Delete Quest');
                            callAPI({
                                call: 'LOCAL/DELETE_QUEST',
                                body: { habitID: selectedDay.id, questID: questItem.id },
                            });
                        }}
                    />
                )).reverse()
            )}
        </div>
    );
};

export default DailyQuestList;
