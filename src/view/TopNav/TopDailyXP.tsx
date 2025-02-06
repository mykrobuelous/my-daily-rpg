import ChipPoints from '@/components/Chip/ChipPoints';
import useData from '@/hooks/useData';
import useLevel from '@/hooks/useLevel';
import useMainStore from '@/store/reducer/MainReducer/useMainStore';
import { twMerge } from 'tailwind-merge';
interface Props {
    className?: string;
}

const TopDailyXP: React.FC<Props> = ({ className }) => {
    const { experienceDataState } = useData();
    const { selectedDay } = useMainStore();
    const { selectedDayStats, statsExpData } = useLevel();

    if (!experienceDataState.data || !selectedDay.get) return null;

    const expTotalPoints = statsExpData?.map((statsExpItem) => {
        const selectedEXP = selectedDayStats?.expTotals?.find(
            (expItem) => expItem.experienceID === statsExpItem.id
        );
        return {
            id: statsExpItem.id,
            expPoints: selectedEXP?.points,
            color: statsExpItem.color,
        };
    });

    return (
        <div className={twMerge('flex min-h-7 items-center gap-4', className)}>
            {expTotalPoints?.map((expItem) => {
                if (expItem.expPoints === 0 || typeof expItem.expPoints === 'undefined')
                    return null;
                return (
                    <ChipPoints
                        key={expItem.id}
                        content={expItem.expPoints.toString()}
                        color={expItem.color.xp}
                    />
                );
            })}
        </div>
    );
};

export default TopDailyXP;
