import { twMerge } from 'tailwind-merge';
import Info from '../../components/Info/Info';
interface Props {
    className?: string;
}

const TestView: React.FC<Props> = ({ className }) => {
    const BASE_XP_REQUIRED = 100;
    const XP_GROWTH_RATE = 1.5;

    const calculateLevelTest = (totalXP: number, averageXPDaily: number) => {
        if (totalXP < 0) {
            throw new Error('XP cannot be negative');
        }
        // PLAYERS CURRENT LEVEL
        const playerLevel =
            totalXP < BASE_XP_REQUIRED
                ? 1
                : Math.floor(Math.log(totalXP / BASE_XP_REQUIRED) / Math.log(XP_GROWTH_RATE)) + 1;

        const currentLevelXPFloor =
            playerLevel === 1
                ? 0
                : Math.floor(BASE_XP_REQUIRED * Math.pow(XP_GROWTH_RATE, playerLevel - 1));

        const currentLevelXPCeil = Math.floor(
            BASE_XP_REQUIRED * Math.pow(XP_GROWTH_RATE, playerLevel)
        );

        // PLAYER EXP TO TOTAL TO NEXT LEVEL
        const playerExpToTotalLevel = currentLevelXPCeil - currentLevelXPFloor;

        // PLAYER CURRENT EXP IN CURRENT LEVEL
        const playerExpInCurLevel = totalXP - currentLevelXPFloor;

        // PLAYER EXP NEEDED TO LEVEL UP
        const playerExpToNextLevel = currentLevelXPCeil - totalXP;

        // PLAYER PERCENTAGE PROGRESS FOR CURRENT LEVEL
        const playerPercentageProgress = (playerExpInCurLevel / playerExpToTotalLevel) * 100;

        // PLAYERS NO OF DAYS TO LEVEL UP BASE ON AVERAGE XP DAILY
        const playerDaysToNextLevel =
            playerExpToNextLevel / averageXPDaily > 1
                ? Math.ceil(playerExpToNextLevel / averageXPDaily)
                : 0;

        return {
            playerLevel,
            playerExpToTotalLevel,
            playerExpInCurLevel,
            playerExpToNextLevel,
            playerPercentageProgress,
            playerDaysToNextLevel,
        };
    };

    const testResults = calculateLevelTest(100, 9);
    return (
        <div
            className={twMerge(
                'text-md flex flex-col items-center justify-center gap-2',
                className
            )}
        >
            <Info
                label="Player Level"
                text={testResults.playerLevel}
                colortwClass="text-blue-400"
            />
            <Info
                label="Player Exp To Total Level"
                text={testResults.playerExpToTotalLevel}
                colortwClass="text-green-400"
            />
            <Info
                label="Player Exp In Current Level"
                text={testResults.playerExpInCurLevel}
                colortwClass="text-red-400"
            />
            <Info
                label="Player Exp To Next Level"
                text={testResults.playerExpToNextLevel}
                colortwClass="text-yellow-400"
            />
            <Info
                label="Player Percentage Progress"
                text={testResults.playerPercentageProgress}
                colortwClass="text-indigo-400"
            />
            <Info
                label="Player Days To Next Level"
                text={testResults.playerDaysToNextLevel}
                colortwClass="text-purple-400"
            />
        </div>
    );
};

export default TestView;
