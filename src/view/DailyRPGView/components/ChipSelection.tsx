import { twMerge } from 'tailwind-merge';
import Chip from '../../../components/Chip/Chip';
import { IDBrand } from '../../../utils/types/BrandType';
import useData from '../../../hooks/useData';

interface Props {
    className?: string;
    selectedChip: {
        state: IDBrand | undefined;
        setState: (id: IDBrand) => void;
    };
}

const ChipSelection: React.FC<Props> = ({ className, selectedChip }) => {
    const { experienceDataState } = useData();
    return (
        <div className={twMerge('flex gap-2', className)}>
            {experienceDataState.data?.map((experienceItem) => {
                return (
                    <Chip
                        key={experienceItem.id}
                        label={experienceItem.ABV}
                        color={experienceItem.color}
                        onClick={() => {
                            selectedChip.setState(experienceItem.id);
                        }}
                        selected={selectedChip.state === experienceItem.id}
                    />
                );
            })}
        </div>
    );
};

export default ChipSelection;
