import { twMerge } from 'tailwind-merge';
import { useMainContext } from '../../../context/MainProvider/useMainContext';
import Chip from '../../../components/Chip/Chip';
import { IDBrand } from '../../../utils/types/BrandType';

interface Props {
    className?: string;
    selectedChip: {
        state: IDBrand | undefined;
        setState: (id: IDBrand) => void;
    };
}

const ChipSelection: React.FC<Props> = ({ className, selectedChip }) => {
    const { experienceData } = useMainContext();
    return (
        <div className={twMerge('flex gap-2', className)}>
            {experienceData.map((experienceItem) => {
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
