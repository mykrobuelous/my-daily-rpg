import { twMerge } from 'tailwind-merge';
import MenuCard from '../components/MenuCard';
import { ExperienceType } from '../../../data/ExperienceType';
import Circle from '../../../components/Circle/Circle';
import Info from '../../../components/Info/Info';

interface Props {
    className?: string;
    experienceData: ExperienceType[] | undefined;
}

const AverageStatistics: React.FC<Props> = ({ className, experienceData }) => {
    return (
        <MenuCard title="Average Statistics" className={twMerge('font-radio', className)}>
            <div className="flex h-full flex-col justify-between">
                <div className="flex gap-6">
                    <Circle title="Points / Day" points={150} />
                    <div className="w-full">
                        {experienceData?.map((expItem) => {
                            return (
                                <div className="flex items-center gap-10" key={expItem.id}>
                                    <p
                                        className={twMerge('leading-1 text-sm', expItem.color.text)}
                                    >{`${expItem.ABV}`}</p>
                                    <p className={twMerge('text-xl', expItem.color.text)}>
                                        {expItem.totalPoints}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Info label="Average Task / Day" text={100} colortwClass="text-blue-400" />
            </div>
        </MenuCard>
    );
};

export default AverageStatistics;
