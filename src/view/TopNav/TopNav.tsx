import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import { Calendar, ChartLine, ChartNoAxesColumn, FileChartColumn, Trash2 } from 'lucide-react';
import RPGLevel from './RPGLevel';
import TopDailyXP from './TopDailyXP';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import { useModalContext } from '@/context/ModalProvider/useModalContext';
import { useDeleteDayDataMutation } from '@/api/rtkAPI/dayAPI';
import LabelText from '@/components/LabelText/LabelText';
import { runToast } from '@/lib/ReactHotToast/runToast';
import CusCheckIcon from '@/lib/ReactHotToast/CusCheckIcon';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    const { selectedDay } = useMainStore();
    const { showConfirmModal } = useModalContext();
    const [deleteDayAPI] = useDeleteDayDataMutation();

    const totalQuest = selectedDay.get?.QuestXP.length;
    const totalXP = selectedDay.get?.QuestXP.reduce((acc, questItem) => {
        return acc + questItem.questDetails.points;
    }, 0);

    return (
        <div className={twMerge('flex items-center py-4', className)}>
            <div className="flex w-full items-center gap-10 px-6">
                <LabelText label="Selected Date" Icon={Calendar} className="gap-1">
                    <p className="text-xl font-bold">
                        {dayjs(selectedDay.get?.date).format('MMMM DD, YYYY')}
                    </p>
                </LabelText>
                <LabelText label="Quests" Icon={ChartLine} className="gap-1">
                    <div className="flex-center w-full">
                        <p className="text-xl font-bold">{totalQuest}</p>
                    </div>
                </LabelText>
                <LabelText label="Daily XP Points" className="gap-1.5" Icon={FileChartColumn}>
                    <TopDailyXP />
                </LabelText>
                <LabelText label="Total XP" Icon={ChartNoAxesColumn} className="gap-1">
                    <div className="flex-center w-full">
                        <p className="text-xl font-bold">{totalXP}</p>
                    </div>
                </LabelText>
                <Trash2
                    className="ml-auto cursor-pointer hover:text-red-400"
                    onClick={() => {
                        showConfirmModal(
                            () => {
                                try {
                                    if (!selectedDay.get?.id) return;
                                    deleteDayAPI({ id: selectedDay.get.id });
                                    runToast(
                                        `${dayjs(selectedDay.get.date).format('MMM DD, YYYY')} Day succesfully deleted`,
                                        <CusCheckIcon />
                                    );
                                    selectedDay.set(null);
                                } catch (error) {
                                    if (error instanceof Error) console.error(error.message);
                                }
                            },
                            'Delete Day',
                            `Are you certain you want to proceed with deleting ${dayjs(selectedDay.get?.date, 'MM.DD.YYYY').format('MMMM DD, YYYY')}? This operation cannot be reversed.`
                        );
                    }}
                />
            </div>
            <div className="ml-auto flex h-full items-center gap-4 border-l border-gray-600 px-4">
                <RPGLevel />
            </div>
        </div>
    );
};

export default TopNav;
