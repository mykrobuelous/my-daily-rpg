import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import LabelText from '../../components/LabelText/LabelText';
import { Calendar, ChartLine, ChartNoAxesColumn, FileChartColumn, Trash2 } from 'lucide-react';
import RPGLevel from './RPGLevel';
import TopDailyXP from './TopDailyXP';
import { useModalContext } from '../../context/ModalProvider/useModalContext';
import useMainStore from '../../store/reducer/MainReducer/useMainStore';
import useData from '../../hooks/useData';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    const { selectedDay } = useMainStore();
    const { levelData } = useData();
    const { showConfirmModal } = useModalContext();

    const totalQuest = selectedDay.get?.QuestXP.length;
    const totalXP = selectedDay.get?.QuestXP.reduce((acc, questItem) => {
        return acc + questItem.questDetails.points;
    }, 0);

    return (
        <div className={twMerge('flex items-center py-4', className)}>
            <div className="flex w-full items-center gap-10 px-6">
                <LabelText label="Selected Date" Icon={Calendar} className="gap-1">
                    <p className="text-md font-bold">
                        {dayjs(selectedDay.get?.date).format('MMMM DD, YYYY')}
                    </p>
                </LabelText>
                <LabelText label="Quests" Icon={ChartLine} className="gap-1">
                    <div className="flex-center w-full">
                        <p className="text-md font-bold">{totalQuest}</p>
                    </div>
                </LabelText>
                <LabelText label="Daily XP Points" className="gap-1.5" Icon={FileChartColumn}>
                    <TopDailyXP />
                </LabelText>
                <LabelText label="Total XP" Icon={ChartNoAxesColumn} className="gap-1">
                    <div className="flex-center w-full">
                        <p className="text-md font-bold">{totalXP}</p>
                    </div>
                </LabelText>
                <Trash2
                    className="ml-auto cursor-pointer hover:text-red-400"
                    onClick={() => {
                        showConfirmModal(
                            () => {
                                // callAPI({
                                //     call: 'LOCAL/DELETE_DAY',
                                //     params: selectedDay.get?.id,
                                // });
                                // runToast(
                                //     `${dayjs(selectedDay.get?.date).format('MMMM DD, YYYY')} has been deleted.`,
                                //     <CusCheckIcon />
                                // );
                                // route.routeHome();
                            },
                            'Delete Day',
                            `Are you certain you want to proceed with deleting ${dayjs(selectedDay.get?.date, 'MM.DD.YYYY').format('MMMM DD, YYYY')}? This operation cannot be reversed.`
                        );
                    }}
                />
            </div>
            <div className="ml-auto flex h-full items-center gap-4 border-l border-gray-600 px-4">
                <RPGLevel level={levelData} />
            </div>
        </div>
    );
};

export default TopNav;
