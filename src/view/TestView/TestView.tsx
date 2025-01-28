import { twMerge } from 'tailwind-merge';
interface Props {
    className?: string;
}

const TestView: React.FC<Props> = ({ className }) => {
    return <div className={twMerge('box-center', className)}>Test</div>;
};

export default TestView;
