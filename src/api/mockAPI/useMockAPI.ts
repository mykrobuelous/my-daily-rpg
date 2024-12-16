import { useState } from 'react';
import { mockDayData } from '../../data/DayData';
import { BodyType } from './mockAPITypes';
import { ErrorAPI } from '../utlis/ErrorAPI';
import { assertNotUndefined } from '../utlis/assertNotUndefined';
import { cleanError } from '../../utils/function/cleanError';

const useMockAPI = () => {
    const [habitData, setHabitData] = useState(mockDayData);

    const callAPI = <T extends BodyType>(options: T) => {
        const { params, body, call } = options;

        switch (call) {
            case 'LOCAL/ADD_QUEST':
                assertNotUndefined('Params', params);

                setHabitData((prevHabit) => {
                    const newHabit = habitData.find((habitItem) => habitItem.id === params);
                    if (newHabit) {
                        const updatedHabit = {
                            ...newHabit,
                            QuestXP: [...newHabit.QuestXP, body],
                        };
                        return habitData.map((habitItem) =>
                            habitItem.id === params ? updatedHabit : habitItem
                        );
                    }
                    return prevHabit;
                });
                break;

            case 'LOCAL/DELETE_QUEST':
                assertNotUndefined('Body', body);
                setHabitData((prevHabit) => {
                    const newHabit = habitData.find((habitItem) => habitItem.id === body.habitID);
                    if (newHabit) {
                        const updatedHabit = {
                            ...newHabit,
                            QuestXP: newHabit.QuestXP.filter((quest) => quest.id !== body.questID),
                        };
                        return habitData.map((habitItem) =>
                            habitItem.id === body.habitID ? updatedHabit : habitItem
                        );
                    }
                    return prevHabit;
                });
                break;

            default:
                throw new Error(cleanError(ErrorAPI.callInvalid));
        }
    };

    return { data: { habitData }, callAPI };
};
export default useMockAPI;
