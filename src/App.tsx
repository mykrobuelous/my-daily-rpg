import './App.css';
import 'react-calendar/dist/Calendar.css';
import MainApplication from './view/MainApplication/MainApplication';
import AppProvider from './view/AppProvider/AppProvider';

function App() {
    return (
        <AppProvider>
            <MainApplication />
        </AppProvider>
    );
}

export default App;
