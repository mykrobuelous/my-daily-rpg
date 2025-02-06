import { twMerge } from 'tailwind-merge';
import DailyQuestItem from './DailyQuestItem';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import { useModalContext } from '@/context/ModalProvider/useModalContext';
import { useDeleteXPDataMutation, useUpdateXPDataMutation } from '@/api/rtkAPI/dayAPI';
import { runToast } from '@/lib/ReactHotToast/runToast';
import CusCheckIcon from '@/lib/ReactHotToast/CusCheckIcon';

interface Props {
    className?: string;
}

const DailyQuestList: React.FC<Props> = ({ className }) => {
    const { selectedDay } = useMainStore();
    const { showConfirmModal, showUpdateQuestModal } = useModalContext();
    const [deleteXPAPI] = useDeleteXPDataMutation();
    const [updateXPAPI] = useUpdateXPDataMutation();

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
                                    deleteXPAPI({ id: questItem.id, dayID: selectedDayID });
                                    runToast('Quest has been deleted.', <CusCheckIcon />);
                                },
                                'Delete Quest',
                                `Are you sure you want to delete "${questItem.questDetails.quest}" quest?`
                            );
                        }}
                        onClick={() => {
                            showUpdateQuestModal(
                                (data) => {
                                    try {
                                        updateXPAPI({
                                            id: questItem.id,
                                            dayID: selectedDayID,
                                            experienceID: data.type,
                                            questDetails: {
                                                quest: data.quest,
                                                points: data.xpPoints,
                                                level: data.level,
                                            },
                                        });
                                    } catch (error) {
                                        if (error instanceof Error) console.error(error.message);
                                    }

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
