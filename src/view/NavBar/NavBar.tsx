import { twMerge } from 'tailwind-merge';
import LogoText from '../../components/LogoText/LogoText';
import { Calendar, CalendarDays, ChartBarBig, Home } from 'lucide-react';
import Button from '../../components/Button/Button';
import { useMainContext } from '../../context/MainProvider/useMainContext';
import dayjs from 'dayjs';

interface Props {
    className?: string;
}

const NavBar: React.FC<Props> = ({ className }) => {
    const { dayData, selectedDayID } = useMainContext();
    return (
        <div className={twMerge('flex flex-col justify-between gap-4 p-5', className)}>
            <LogoText text="Daily RPG" Logo={ChartBarBig} size={'lg'} />
            <LogoText text="Home" Logo={Home} size={'sm'} />
            <div className="flex flex-col h-full gap-1 mt-4 overflow-y-scroll">
                {dayData.map((dayItem) => {
                    return (
                        <LogoText
                            size={'xs'}
                            key={dayItem.id}
                            text={dayjs(dayItem.date, 'MM.DD.YYYY').format('MMMM D, YYYY')}
                            className={twMerge(
                                'gap-2 p-2 pl-4',
                                selectedDayID.state?.id === dayItem.id
                                    ? 'rounded-lg bg-gray-800'
                                    : ''
                            )}
                            Logo={Calendar}
                            onClick={() => {
                                selectedDayID.setState(dayItem.id);
                            }}
                        />
                    );
                })}
            </div>
            <Button text="New Day" Icon={CalendarDays} />
        </div>
    );
};

export default NavBar;
