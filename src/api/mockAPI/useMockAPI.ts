import { useState } from 'react';
import { mockDayData } from '../../data/DayData';
import { BodyType } from './mockAPITypes';
import { ErrorAPI } from '../utils/ErrorAPI';
import { assertNotUndefined } from '../utils/assertNotUndefined';
import { cleanError } from '../../utils/function/cleanError';
import dayjs from 'dayjs';

const useMockAPI = () => {
    const [habitData, setHabitData] = useState(mockDayData);

    const callAPI = <T extends BodyType>(options: T) => {
        const { params, body, call } = options;

        switch (call) {
            case 'LOCAL/ADD_QUEST':
                assertNotUndefined('Params', params);
                assertNotUndefined('Body', body);

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

            case 'LOCAL/UPDATE_QUEST':
                assertNotUndefined('Params', params);
                assertNotUndefined('Body', body);
                setHabitData((prevHabit) => {
                    const newHabit = habitData.find((habitItem) => habitItem.id === params);
                    if (newHabit) {
                        const updatedHabit = {
                            ...newHabit,
                            QuestXP: newHabit.QuestXP.map((questItem) =>
                                questItem.id === body.id
                                    ? {
                                          ...questItem,
                                          experienceID: body.experienceID,
                                          questDetails: {
                                              quest: body.questDetails.quest,
                                              points: body.questDetails.points,
                                              level: body.questDetails.level,
                                          },
                                      }
                                    : questItem
                            ),
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
                            QuestXP: newHabit.QuestXP.filter(
                                (questItem) => questItem.id !== body.questID
                            ),
                        };
                        return habitData.map((habitItem) =>
                            habitItem.id === body.habitID ? updatedHabit : habitItem
                        );
                    }
                    return prevHabit;
                });
                break;

            case 'LOCAL/ADD_DAY':
                assertNotUndefined('Body', body);
                setHabitData((prevHabit) => {
                    const newDay = {
                        id: body.id,
                        date: dayjs(body.date).format('MM.DD.YYYY'),
                        QuestXP: [],
                    };
                    return [...prevHabit, newDay];
                });
                break;

            case 'LOCAL/DELETE_DAY':
                setHabitData((prevHabit) => {
                    return prevHabit.filter((habitItem) => habitItem.id !== params);
                });
                break;

            default:
                throw new Error(cleanError(ErrorAPI.callInvalid));
        }
    };

    return { data: { habitData }, callAPI };
};
export default useMockAPI;
