import "./App.css";
import MainApplication from "./view/MainApplication/MainApplication";
import MainProvider from "./view/MainProvider/MainProvider";

function App() {
	return (
		<MainProvider>
			<MainApplication />
		</MainProvider>
	);
}

export default App;
