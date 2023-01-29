import "./App.css";
import "material-symbols";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

const isLoggedIn = true;

function App() {
  if (isLoggedIn) {
    return <Home />;
  } else {
    return <SignInPage />;
  }
}

export default App;
