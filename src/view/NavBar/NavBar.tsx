import { twMerge } from 'tailwind-merge';
import LogoText from '../../components/LogoText/LogoText';
import { CalendarDays, ChartBarBig, Home } from 'lucide-react';
import Button from '../../components/Button/Button';
import NavDateList from './NavDateList';

interface Props {
    className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={twMerge(
                'flex flex-col justify-between gap-4 overflow-hidden p-5',
                className
            )}
        >
            <LogoText text="Daily RPG" Logo={ChartBarBig} size={'lg'} />
            <LogoText
                text="Home"
                Logo={Home}
                size={'sm'}
                className="py-2 pl-4 rounded-lg hover:bg-white hover:text-black"
            />
            <NavDateList className="mt-1 overflow-y-scroll" />
            <Button text="New Day" Icon={CalendarDays} />
        </div>
    );
};

export default NavBar;
