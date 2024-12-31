import { twMerge } from 'tailwind-merge';
import DailyQuestItem from './DailyQuestItem';
import { runToast } from '../../../../lib/ReactHotToast/runToast';
import CusCheckIcon from '../../../../lib/ReactHotToast/CusCheckIcon';
import { useModalContext } from '../../../../context/ModalProvider/useModalContext';
import useMainStore from '../../../../store/reducer/MainReducer/useMainStore';

interface Props {
    className?: string;
}

const DailyQuestList: React.FC<Props> = ({ className }) => {
    const { selectedDay } = useMainStore();
    const { showConfirmModal, showUpdateQuestModal } = useModalContext();

    if (!selectedDay.get) return;

    const { id: selectedDayID } = selectedDay.get;

    return (
        <div className={twMerge('flex flex-col', className)}>
            {selectedDay.get.QuestXP.length === 0 ? (
                <div className="view-full flex justify-center">
                    <p className="mt-8 text-lg font-bold">No Quests for Today</p>
                </div>
            ) : (
                selectedDay.get.QuestXP.map((questItem) => (
                    <DailyQuestItem
                        key={questItem.id}
                        questItem={questItem}
                        onTrash={() => {
                            showConfirmModal(
                                () => {
                                    // callAPI({
                                    //     call: 'LOCAL/DELETE_QUEST',
                                    //     body: { habitID: selectedDay.id, questID: questItem.id },
                                    // });
                                    runToast('Quest has been deleted.', <CusCheckIcon />);
                                },
                                'Delete Quest',
                                `Are you sure you want to delete "${questItem.questDetails.quest}" quest?`
                            );
                        }}
                        onClick={() => {
                            showUpdateQuestModal(
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                (_data) => {
                                    // callAPI({
                                    //     call: 'LOCAL/UPDATE_QUEST',
                                    //     body: {
                                    //         ...questItem,
                                    //         experienceID: data.type,
                                    //         questDetails: {
                                    //             quest: data.quest,
                                    //             points: data.xpPoints,
                                    //             level: data.level,
                                    //         },
                                    //     },
                                    //     params: selectedDay.id,
                                    // });
                                    runToast('Quest has been updated.', <CusCheckIcon />);
                                },
                                selectedDayID,
                                questItem.id
                            );
                        }}
                    />
                )).reverse()
            )}
        </div>
    );
};

export default DailyQuestList;
