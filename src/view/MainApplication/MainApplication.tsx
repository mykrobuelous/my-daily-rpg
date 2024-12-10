import DailyRPGView from '../DailyRPGView/DailyRPGView';
import NavBar from '../NavBar/NavBar';
import TopNav from '../TopNav/TopNav';

const MainApplication = () => {
    return (
        <div className="flex flex-row view-full">
            <NavBar className="w-64 bg-gray-950" />
            <div className="flex flex-col flex-grow">
                <TopNav className="bg-gray-900" />
                <DailyRPGView className="flex-grow" />
            </div>
        </div>
    );
};

export default MainApplication;
