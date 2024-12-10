import './App.css';
import MainApplication from './view/MainApplication/MainApplication';
import AppProvider from './view/MainProvider/AppProvider';

function App() {
    return (
        <AppProvider>
            <MainApplication />
        </AppProvider>
    );
}

export default App;
