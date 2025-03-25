import { Routes, Route, useParams } from "react-router";
import UsersList from "./pages/UsersList";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import UserDetails from "./pages/UserDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<UsersList users={users} />} />
      <Route path="/user/:userId" element={<UserDetails  />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edit/:userId" element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
