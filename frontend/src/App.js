import "./App.css";
import "material-symbols";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

var isLoggedIn = false;

function App() {
  if (localStorage.getItem("token") != null) {
    isLoggedIn = true;
  }

  if (isLoggedIn) {
    return <Home />;
  } else {
    return <SignInPage />;
  }
}

export default App;
