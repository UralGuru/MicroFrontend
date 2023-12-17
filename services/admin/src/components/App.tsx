
import { Link, Outlet } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard"


export const App = () => {
  return (
    <div>
      <h1>ADMIN MODULE</h1>

        <UserCard userName="Ural"/>
        <UserCard userName="Siberia"/>
        <UserCard userName="Center"/>

        <Outlet />

    </div>
  );
};

export default App;