import { twMerge } from 'tailwind-merge';
import { infoSizeConfigstwClass, InfoSizeType } from './infoConfigTypes';

interface Props {
    className?: string;
    label: string;
    text: string | number;
    colortwClass: string;
    size?: InfoSizeType;
}

const Info: React.FC<Props> = ({ className, label, text, colortwClass, size = 'md' }) => {
    const { textSize } = infoSizeConfigstwClass[size];
    return (
        <div className={twMerge('flex items-center space-x-2', textSize, className)}>
            <span className="font-medium">{`${label}: `}</span>
            <span className={twMerge('font-bold text-yellow-400', colortwClass)}>{text}</span>
        </div>
    );
};

export default Info;
