import { ModalProvider } from '@/context/ModalProvider/ModalProvider';
import store from '@/store/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

interface Props {
    children?: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <ModalProvider>
                <div className="view-screen bg-gray-800">{children}</div>
                <Toaster position="top-right" />
            </ModalProvider>
        </Provider>
    );
};

export default AppProvider;
