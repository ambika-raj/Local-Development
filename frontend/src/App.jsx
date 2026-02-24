import { Toaster } from "react-hot-toast";
import useUsers from "./hooks/useUsers"
import { useState } from "react";
import Skeleton from "./components/Skeleton";
// import ""


export default function App() {
  const {users, isLoading} = useUsers();
  // const users = useUsers();

  return(
    <div style={{ padding: 40}}>
      <Toaster position="top-right" />
      <h1>Axios Instance Demo</h1>
      <h3>User List:</h3>

      {isLoading ? (
        // <p>Loading users...</p>
        <div className="grid grid-cols-3 gap-4">

          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i}/>
            ))}

        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

