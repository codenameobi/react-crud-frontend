import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router";

const UpdateUser = () => {
    const { userId} = useParams();

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put( `https://67e475a72ae442db76d48145.mockapi.io/users/${userId}`, user);
            console.log(response);
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }); // Reset form after successful submission
            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.error(error);
            setError("Error creating user. Please try again later.");
        }
    };

    return (
        <div className="user-form">
            <Typography variant="h5" gutterBottom>User Form</Typography>

            {/* {error && <div className="error" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} Display error if exists */}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInput}
                        margin="normal"
                    />
                </div>

                <div className="mb-3">
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInput}
                        margin="normal"
                    />
                </div>

                <div className="mb-3">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        margin="normal"
                        type="email"
                    />
                </div>

                <div className="mb-3">
                    <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        name="phone"
                        value={user.phone}
                        onChange={handleInput}
                        margin="normal"
                        type="text"
                    />
                </div>

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </div>
    );
  };
export default UpdateUser;