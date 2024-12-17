import { MainProvider } from '../../context/MainProvider/MainProvider';
import { ModalProvider } from '../../context/ModalProvider/ModalProvider';

interface Props {
    children?: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
    return (
        <MainProvider>
            <ModalProvider>
                <div className="view-screen bg-gray-800">{children}</div>
            </ModalProvider>
        </MainProvider>
    );
};

export default AppProvider;
