import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const TopNav: React.FC<Props> = ({ className }) => {
    return <div className={twMerge('box-center', className)}>TopNav</div>;
};

export default TopNav;
