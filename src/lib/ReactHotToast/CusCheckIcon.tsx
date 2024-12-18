import { CircleCheckBig } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const CusCheckIcon: React.FC<Props> = ({ className }) => {
    return <CircleCheckBig className={twMerge('text-green-500', className)} size={20} />;
};

export default CusCheckIcon;
