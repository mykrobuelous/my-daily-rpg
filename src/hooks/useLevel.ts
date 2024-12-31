import { useMemo } from 'react';
import { DayType } from '../data/DayType';
import { calculateLevel } from '../utils/function/calculateLevel';

const useLevel = (dayData: DayType[] | undefined) => {
    const levelData = useMemo(() => {
        if (!dayData) return 0;
        const totalXPPoints = dayData.reduce((acc, dayItem) => {
            const totalDayXPPoints = dayItem.QuestXP.reduce((acc, questItem) => {
                return acc + questItem.questDetails.points;
            }, 0);
            return acc + totalDayXPPoints;
        }, 0);
        return calculateLevel(totalXPPoints);
    }, [dayData]);

    return { levelData };
};

export default useLevel;
