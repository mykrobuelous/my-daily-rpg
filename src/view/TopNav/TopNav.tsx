import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import dayjs from 'dayjs';
import LabelText from '../../components/LabelText/LabelText';
import { Calendar, ChartLine, ChartNoAxesColumn, FileChartColumn } from 'lucide-react';
import RPGLevel from './RPGLevel';
import TopDailyXP from './TopDailyXP';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    const { selectedDayID } = useMainContext();

    const totalQuest = selectedDayID.state?.QuestXP.length;
    const totalXP = selectedDayID.state?.QuestXP.reduce((acc, questItem) => {
        return acc + questItem.questDetails.points;
    }, 0);

    return (
        <div className={twMerge('flex items-center gap-10 px-7 py-2', className)}>
            <LabelText label="Selected Date" Icon={Calendar} className="gap-1">
                <p className="text-lg font-bold">
                    {dayjs(selectedDayID.state?.date).format('MMMM DD, YYYY')}
                </p>
            </LabelText>
            <LabelText label="Quests" Icon={ChartLine} className="gap-1">
                <div className="flex-center w-full">
                    <p className="text-lg font-bold">{totalQuest}</p>
                </div>
            </LabelText>
            <LabelText label="Daily XP Points" className="gap-1.5" Icon={FileChartColumn}>
                <TopDailyXP />
            </LabelText>
            <LabelText label="Total XP" Icon={ChartNoAxesColumn} className="gap-1">
                <div className="flex-center w-full">
                    <p className="text-lg font-bold">{totalXP}</p>
                </div>
            </LabelText>
            <RPGLevel level={15} className="ml-auto" />
        </div>
    );
};

export default TopNav;
