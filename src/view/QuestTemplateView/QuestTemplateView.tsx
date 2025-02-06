import { twMerge } from 'tailwind-merge';
import MenuCard from '../MenuStatsView/components/MenuCard';
import QuestTemplateCard from './QuestTempateCard/QuestTemplateCard';

interface Props {
    className?: string;
}

const QuestTemplateView: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex h-full gap-6 p-6', className)}>
            <QuestTemplateCard className="font-radio rounded-xl" />
            <MenuCard
                title="Sets"
                className={twMerge('font-radio w-3/5 rounded-xl', className)}
            ></MenuCard>
        </div>
    );
};

export default QuestTemplateView;
