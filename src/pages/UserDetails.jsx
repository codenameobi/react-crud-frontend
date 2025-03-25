import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


const UserDetails = () => {

    let navigate = useNavigate();
    const { userId } = useParams();
  const [user, setUser] = useState({});
    const fetchUserData = async () => {

        try {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          setUser(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
          fetchUserData();
        }, [userId]);

        const updateUser = (id) => {
            navigate(`/edit/${id}`);
          };

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Button aria-label="delete" onClick={() => updateUser(user.id)}>
                    Update User
                  </Button>
    </div>
  );
};

export default UserDetails;
