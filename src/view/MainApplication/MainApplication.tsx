import useMainStore from '../../store/reducer/MainReducer/useMainStore';
import DailyRPGView from '../DailyRPGView/DailyRPGView';
import NavBar from '../NavBar/NavBar';
import TestView from '../TestView/TestView';
import TopNav from '../TopNav/TopNav';

const MainApplication = () => {
    const { selectedDay } = useMainStore();
    return (
        <div className="view-full flex flex-row">
            <NavBar className="w-64 bg-gray-950" />
            <div className="flex flex-grow flex-col">
                {selectedDay.get ? (
                    <>
                        <TopNav className="bg-gray-900" />
                        <DailyRPGView className="flex-grow" />
                    </>
                ) : (
                    <TestView className="view-full" />
                )}
            </div>
        </div>
    );
};

export default MainApplication;
