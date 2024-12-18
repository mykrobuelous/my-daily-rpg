import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import dayjs from 'dayjs';
import LabelText from '../../components/LabelText/LabelText';
import { Calendar, ChartLine, ChartNoAxesColumn, FileChartColumn, Trash2 } from 'lucide-react';
import RPGLevel from './RPGLevel';
import TopDailyXP from './TopDailyXP';
import { useModalContext } from '../../context/ModalProvider/useModalContext';
import { runToast } from '../../lib/ReactHotToast/runToast';
import CusCheckIcon from '../../lib/ReactHotToast/CusCheckIcon';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    const { selectedDayID, callAPI, route, levelData } = useMainContext();
    const { showConfirmModal } = useModalContext();

    const totalQuest = selectedDayID.state?.QuestXP.length;
    const totalXP = selectedDayID.state?.QuestXP.reduce((acc, questItem) => {
        return acc + questItem.questDetails.points;
    }, 0);

    return (
        <div className={twMerge('flex items-center py-4', className)}>
            <div className="flex w-full items-center gap-10 px-6">
                <LabelText label="Selected Date" Icon={Calendar} className="gap-1">
                    <p className="text-md font-bold">
                        {dayjs(selectedDayID.state?.date).format('MMMM DD, YYYY')}
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
                                callAPI({
                                    call: 'LOCAL/DELETE_DAY',
                                    params: selectedDayID.state?.id,
                                });
                                runToast(
                                    `${dayjs(selectedDayID.state?.date).format('MMMM DD, YYYY')} has been deleted.`,
                                    <CusCheckIcon />
                                );
                                route.routeHome();
                            },
                            'Delete Day',
                            `Are you certain you want to proceed with deleting ${dayjs(selectedDayID.state?.date, 'MM.DD.YYYY').format('MMMM DD, YYYY')}? This operation cannot be reversed.`
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
