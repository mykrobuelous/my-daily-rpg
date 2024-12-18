import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../../../context/MainProvider/useMainContext';
import DailyQuestItem from './DailyQuestItem';
import { runToast } from '../../../../lib/ReactHotToast/runToast';
import CusCheckIcon from '../../../../lib/ReactHotToast/CusCheckIcon';
import { useModalContext } from '../../../../context/ModalProvider/useModalContext';

interface Props {
    className?: string;
}

const DailyQuestList: React.FC<Props> = ({ className }) => {
    const {
        selectedDayID: { state: selectedDay },
        callAPI,
    } = useMainContext();
    const { showConfirmModal, showUpdateQuestModal } = useModalContext();

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
                            showConfirmModal(
                                () => {
                                    callAPI({
                                        call: 'LOCAL/DELETE_QUEST',
                                        body: { habitID: selectedDay.id, questID: questItem.id },
                                    });
                                    runToast('Quest has been deleted.', <CusCheckIcon />);
                                },
                                'Delete Quest',
                                `Are you sure you want to delete "${questItem.questDetails.quest}" quest?`
                            );
                        }}
                        onClick={() => {
                            showUpdateQuestModal(() => {});
                        }}
                    />
                )).reverse()
            )}
        </div>
    );
};

export default DailyQuestList;
