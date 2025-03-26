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
        `https://67e475a72ae442db76d48145.mockapi.io/users/${userId}`
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

  const createUser = async(id) => {
    try {
        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }

        const response = await axios.post(`https://67e475a72ae442db76d48145.mockapi.io/users/${id}`, userData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("User Created", response);
    } catch (error) {
        console.error("Error", error);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Age:</strong> {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <Button  onClick={() => updateUser(user.id)}>
        Update User
      </Button>
    </div>
  );
};

export default UserDetails;
