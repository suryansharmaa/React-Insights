import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
