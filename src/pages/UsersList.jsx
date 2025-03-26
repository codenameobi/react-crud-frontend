import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useParams } from "react-router";

const UsersList = ({ users }) => {
  let navigate = useNavigate();
console.log(users);



  const updateUser = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <Box sx={{ flexGrow: 1, p: 1 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Users List
      </Typography>

      {/* Grid Layout for Users */}
      <Grid container spacing={1} justifyContent="center">
        {users.map((user) => (
          <Grid key={user.id} size={{ lg: 4, md: 6, sm: 12 }}>
            {" "}
            {/* 3 Cards per row on medium screens */}
            <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
              <CardHeader
                title={user.firstName}
                subheader={user.lastName}
                action={
                  <IconButton aria-label="delete" onClick={() => updateUser(user.id)}>
                    <SettingsIcon />
                  </IconButton>
                }
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: 2,
                  borderBottom: "1px solid #ddd",
                }}
              />
              <CardContent>
                <Typography variant="body1">
                  <EmailIcon
                    fontSize="small"
                    sx={{ verticalAlign: "middle", mr: 1 }}
                  />
                  {user.email}
                </Typography>
                <Typography variant="body1">
                  <PhoneIcon
                    fontSize="small"
                    sx={{ verticalAlign: "middle", mr: 1 }}
                  />
                  {user.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Centered "Add User" Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          href="/adduser"
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
      </Box>
    </Box>
  );
};

export default UsersList;
