import { Routes, Route, useParams } from "react-router";
import UsersList from "./pages/UsersList";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import UserDetails from "./pages/UserDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState(null);

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

  const fetchUserData = async () => {

    const userData = users.find(user => user.id === parseInt(id));

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(userData);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    fetchUsers();
    fetchUserData();
  }, [id]);
  return (
    <Routes>
      <Route path="/" element={<UsersList users={users} />} />
      <Route path="user/:userId" element={<UserDetails user={user} />} />
      <Route path="/adduser" element={<AddUser />} />
      {/* <Route path=":edit" element={<UpdateUser />} /> */}
    </Routes>
  );
}

export default App;
