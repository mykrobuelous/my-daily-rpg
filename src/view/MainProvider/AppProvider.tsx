import { MainProvider } from '../../context/MainProvider/MainProvider';

interface Props {
    children?: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
    return (
        <MainProvider>
            <div className="bg-gray-800 view-screen">{children}</div>
        </MainProvider>
    );
};

export default AppProvider;
