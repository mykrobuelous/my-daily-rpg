import { twMerge } from 'tailwind-merge';
import ChipPoints from '../../components/Chip/ChipPoints';
import { v4 as uuidv4 } from 'uuid';
import useData from '../../hooks/useData';
import useMainStore from '../../store/reducer/MainReducer/useMainStore';
interface Props {
    className?: string;
}

const TopDailyXP: React.FC<Props> = ({ className }) => {
    const { experienceDataState } = useData();
    const { selectedDay } = useMainStore();

    if (!experienceDataState.data || !selectedDay.get) return null;

    const expTotalPoints = experienceDataState.data.map((expItem) => {
        const xpPoints = selectedDay.get?.QuestXP.reduce((acc, questItem) => {
            if (expItem.id === questItem.experienceID) {
                return acc + questItem.questDetails.points;
            }
            return acc;
        }, 0);
        return {
            id: uuidv4(),
            xpPoints,
            color: expItem.color,
        };
    });

    return (
        <div className={twMerge('flex min-h-7 items-center gap-4', className)}>
            {expTotalPoints.map((expItem) => {
                if (expItem.xpPoints === 0 || typeof expItem.xpPoints === 'undefined') return null;
                return (
                    <ChipPoints
                        key={expItem.id}
                        content={expItem.xpPoints.toString()}
                        color={expItem.color.xp}
                    />
                );
            })}
        </div>
    );
};

export default TopDailyXP;
