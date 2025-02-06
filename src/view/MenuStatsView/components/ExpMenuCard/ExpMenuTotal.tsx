import Circle from '@/components/Circle/Circle';
import useLevel, { StatsExpDataType } from '@/hooks/useLevel';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
    expItem: StatsExpDataType;
}

const ExpMenuTotal: React.FC<Props> = ({ className, expItem }) => {
    const { totalDays } = useLevel();
    return (
        <div className={twMerge('view-full flex items-center justify-between', className)}>
            <Circle
                title="Total XP"
                points={expItem?.stats?.points || 0}
                size="xs"
                bordertwClass={expItem?.color.border}
                labelLocation="bottom"
                texttwClass={expItem?.color.text}
            />
            <Circle
                title="Total Quest"
                points={expItem.stats.tasks || 0}
                size="xs"
                bordertwClass={expItem?.color.border}
                labelLocation="bottom"
                texttwClass={expItem?.color.text}
            />
            <Circle
                title="Daily Quest"
                points={expItem.stats.tasks / totalDays || 0}
                size="xs"
                bordertwClass={expItem?.color.border}
                labelLocation="bottom"
                texttwClass={expItem?.color.text}
            />
        </div>
    );
};

export default ExpMenuTotal;
