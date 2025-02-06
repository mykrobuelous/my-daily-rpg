import { IDBrand } from '../utils/types/BrandType';

export type XPPointsType = {
    id: IDBrand;
    experienceID: IDBrand;
    points: number;
    tasks: number;
};

export type DailyStats = {
    id: IDBrand;
    dayID: IDBrand;
    date: string;
    expTotals: XPPointsType[];
};

export type TotalStatsType = {
    id: IDBrand;
    expTotals: XPPointsType[];
    dailyStats: DailyStats[];
};

export type TotalStatsAPIType = {
    totalPoints: number;
    totalTasks: number;
    totalDays: number;
    totalExpStats: XPPointsType[];
    dailyStats: DailyStats[];
};

// REQUIREMENTS
// (Overall Level & Category Levels)

// 1. Overall Level - CalculateLevel
// 2. Current Experience for This level - CalculateLevel
// 3. To Next Level Points - CalculateLevel
// 4. Days to Next Level - (Total Points / totalDays) / (To Next Level Points)

// (TOTALS & AVERAGES)

// 1. Total Points - experienceTotals.points.reduce
// 2. Total Task - totalTasks
// 3. Total Points per Category/Exp - experienceTotals[exp].points
// 4. Total Number of Days - DailyStats.length
// 5. Average Points per Day - Total Points / Total Number of Days
// 6. Total Points Per Category Per Day - experienceTotals[exp].points
// 7. Average Points per Category - experienceTotals[exp].points / Total Number of Days
// 8. Total Task Per Day - DailyStats.tasks.reduce
// 9. Total Task Per Category per Day - dailyStats.tasks[exp]
// 10. Average Tasks of each Category per day - experienceTotals[exp].tasks / Total Number of Days

// DESCRIPTION

// (Overall Level & Category Levels)

// 1. Overall Level - The Level based on the total points of everything. I already have a function that calculates these values.
// 2. Current Experience for This level - This is the current points acquired in this level. This can also be calculated based on the function based on the total points.
// 3. To Next Level Points - This is the the total points needed to the next level. This can also be calculated based on the function by just deducting.
// 4. Days to Next Level - How many days would it take to get to the next level. This is calculated based on the average points per day based on the Next Level Points. This can be calculated easily in one function. However, I would need the average points per day.

// NOTE: There is an overall Level that could be calculated through total points in this, and I already have a function to calculate this. This is also applicable to each Category, so if I get the total points of each category and the averages, I can calculate it in the front end since it is a simple calculation.

// (TOTALS & AVERAGES)

// 1. Total Points - This is the total points of everything of everyday. This requires heavy calculation if done manually.
// 2. Total Task - Each Task is an XPType. How many total task overall.
// 3. Total Points per Category/Exp - Each task has a category, we will need the total points of each category.
// 4. Total Number of Days - This is fairly easily to calculate but we would need to fetch the daysData and get the length.
// 5. Average Points per Day - This is the calculated based on the number of the days / the total points however, this is also a heavy calculation because if done manually, we will need to reiterate over a lot of days.
// 6. Total Points Per Category Per Day - How many points per category in one day. This can be calculated easily in the front end but it will be needed for the averages of each category.
// 7. Average Points per Category - Since Each Day has a Total Points per Category, how much is the average of each category done per day.
// 8. Total Task Per Day - How many task done per day. It can be calculated manually but it will require heavy calculation.
// 9. Total Task Per Category per Day - How many task per category per day.
// 10. Average Tasks of each Category per day - How many tasks done per day and the averages of it.

// FUNCTIONS & OPERATIONS

// 1. Fetch Day Data - NA

// 2. Add New Day
//    - Add New DayData
//    - Add DailyStats Data

// 3. Delete Day
//    - Delete DayData
//    - Delete DailyStats Data
//    - Deduct Points TotalStats From Category
//    - Deduct Tasks TotalStats From Category

// 4. Fetch Experience Data - NA

// 5. Add New XP Data
//    - Add XP Data
//    - Add Points TotalStats Experience
//    - Increment by 1 TotalStats Tasks
//    - Add Points to DailyStats Points
//    - Increment by 1 DailyStats Tasks

// 6. Update XP Data
//    - Update XP Data
//    - Add Points to Selected Category on TotalStats
//    - Deduct Points from Previous Category on TotalStats
//    - Decrement by 1 Tasks from Previous Category on TotalStats
//    - Increment by 1 Tasks on TotalStats
//    - Add Points to Selected Category on DailyStats Points
//    - Deduct Points from Previous Category on DailyStats Points
//    - Decrement by 1 Tasks from Previous Category on DailyStats Tasks
//    - Increment by 1 Tasks on DailyStats Tasks

// 7. Delete XP Data
//    - Delete XP Data
//    - Deduct Points from TotalStats
//    - Decrement by 1 Tasks from TotalStats
//    - Deduct Points from DailyStats
//    - Decrement by 1 Tasks from DailyStats
