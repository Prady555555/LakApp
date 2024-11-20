import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponets";
import { useState } from "react";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { userNameValidation } from "../utils/validator";
import { Design, wallpaper } from "../../public/images";
const Login = () => {
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const password = useStrongPassword();
  const userName = useInputValidation("", userNameValidation);
  const avatar = useFileHandler("single", 2);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("signup");
  };

  const [islogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex m-0 ">
      {!islogin && (
        <div className="h-full max-md:hidden">
          <img src={wallpaper} alt="Design" className="h-screen object-cover" />
        </div>
      )}
      <Container
        component={"main"}
        maxWidth="sm"
        className="h-screen flex items-center justify-center"
      >
        <Paper
          elevation={6}
          className="p-4  flex flex-col justify-center items-center"
        >
          {islogin ? (
            <>
              <Typography variant="h6">Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  label="Email"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  label="Password"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                >
                  Login
                </Button>
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  or
                </Typography>

                <Button
                  className="mt-10"
                  variant="contained"
                  color="success"
                  onClick={toggleLogin}
                  fullWidth
                  sx={{
                    marginTop: "1rem",
                  }}
                >
                  Signup
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                SignUp
              </Typography>
              <form onSubmit={handleSignup}>
                <Stack
                  position={"relative"}
                  width={"10rem"}
                  height={"10rem"}
                  className="m-auto"
                >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "0",
                      bottom: "0",
                      bgcolor: "inherit",
                    }}
                    component="label"
                  >
                    <>
                      <CameraAlt />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>

                {avatar.error && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "0.8rem",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}
                    variant="caption"
                    color="error"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  label="Name"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                  label="Bio"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  label="UserName"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                  value={userName.value}
                  onChange={userName.changeHandler}
                />

                {userName.error && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "0.8rem",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}
                    variant="caption"
                    color="error"
                  >
                    {userName.error}
                  </Typography>
                )}

                <TextField
                  label="Password"
                  fullWidth
                  required
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  type="password"
                  onChange={password.changeHandler}
                />

                {password.error && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "0.8rem",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}
                    variant="caption"
                    color="error"
                  >
                    {password.error}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                >
                  Signup
                </Button>
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  or
                </Typography>

                <Button
                  className="mt-10"
                  variant="contained"
                  color="success"
                  onClick={toggleLogin}
                  fullWidth
                  sx={{
                    marginTop: "1rem",
                  }}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
      {!islogin ? (
        <div className="h-full max-md:hidden">
          <img src={wallpaper} alt="" className="h-screen object-cover" />
        </div>
      ) : (
        <div className="h-full max-md:hidden">
          <img src={Design} alt="" className="h-screen object-cover" />
        </div>
      )}
    </div>
  );
};

export default Login;
