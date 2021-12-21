import { useAuth0 } from "@auth0/auth0-react";
import { EllipsisLoader } from "load-animations-react";
import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";


function App() {
  const { isLoading } = useAuth0()
  if (isLoading) return <div className="flex flex-col items-center justify-center h-screen">
    < EllipsisLoader color="white"/>
  </div>

  return (
    <>
      <LoginButton />
      {/* <LogoutButton /> */}
      <Profile />
    </>
  );
}

export default App;
