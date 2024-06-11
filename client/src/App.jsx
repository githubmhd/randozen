import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { IntroProvider } from "./Context/LoaderContext";
import { ImageContextProvider } from "./Context/ImageContext";

function App() {
	return (
		<>
			<IntroProvider>
				<UserAuthContextProvider>
					<ImageContextProvider>
						<header>
							<Header />
						</header>
						<Outlet />
						<Navbar />
					</ImageContextProvider>
				</UserAuthContextProvider>
			</IntroProvider>
		</>
	);
}

export default App;
