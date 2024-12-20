import { CircleX } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const CusExIcon: React.FC<Props> = ({ className }) => {
    return <CircleX className={twMerge('text-red-500', className)} size={60} />;
};

export default CusExIcon;
