import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { memo, useState } from "react";

import { Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
// import { useDispatch } from "react-redux";

import { LoginStyled } from "./styled";
import { red } from "@mui/material/colors";
// import { expirationTimeAccessToken } from "./config";

interface Initial {
  email: string;
  password: string;
}

const LogInForm = () => {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState<Initial>({
    email: "",
    password: "",
  });
  // const dispatch = useDispatch();
  // const newValid = { ...errMessage };

  // const handleInput = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   properties: string
  // ) => {
  //   if (properties === UserLogin.EMAIL) {
  //     setInputValue({ ...inputValue, email: e.target.value });
  //     if (!regx.test(e.target.value)) {
  //       setErrMessage({ ...errMessage, email: "Vui lòng nhập đúng Email!" });
  //       return true;
  //     } else {
  //       setErrMessage({ ...errMessage, email: "" });
  //     }
  //   }
  //   if (properties === UserLogin.PASS) {
  //     setInputValue({ ...inputValue, password: e.target.value });

  //     if (e.target.value) {
  //       setErrMessage({ ...errMessage, password: "" });
  //       return false;
  //     }
  //   }
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!inputValue.email.trim()) {
  //     newValid.email = "Vui lòng nhập Email!";
  //   }
  //   if (!inputValue.password.trim()) {
  //     newValid.password = "Vui lòng nhập Password!";
  //   }

  //   if (inputValue.email.trim() && inputValue.password.trim()) {
  //     if (data) {
  //       const result = await data.find((item: IUser) => {
  //         return item.email === inputValue.email;
  //       });

  //       if (result) {
  //         const secret = "secret";

  //         const checkedPass = bcrypt.compareSync(
  //           inputValue.password,
  //           result.password
  //         );
  //         if (result.email === inputValue.email && checkedPass) {
  //           //RefreshToken
  //           // const refreshTokenData = {
  //           //   email: result.email,
  //           //   password: result.password,
  //           //   type: "refresh",
  //           // };
  //           // const refreshtoken = sign(refreshTokenData, secret);
  //           // // console.log("jwt", refreshtoken);
  //           // Cookies.set("refresh", refreshtoken, {
  //           //   expires: expirationTimeRefreshToken(),
  //           //   secure: true,
  //           //   sameSite: "Lax",
  //           // });

  //           //AccessToken
  //           const accessTokenData = {
  //             email: result.email,
  //             password: result.password,
  //             type: "access",
  //           };
  //           const accessToken = sign(accessTokenData, secret);

  //           await Cookies.set("access", accessToken, {
  //             expires: expirationTimeAccessToken(),
  //             secure: true,
  //             sameSite: "Lax",
  //           });

  //           dispatch(
  //             handleUserLogin({
  //               email: inputValue.email,
  //               password: inputValue.password,
  //             })
  //           );
  //           result.position === "admin" ? navigate("/admin") : navigate("/");

  //           return true;
  //         }
  //         if (!checkedPass) {
  //           newValid.password = "Mật khẩu không tồn tại!";
  //         }
  //       } else {
  //         newValid.password = "Tài khoản hoặc mật khẩu sai";
  //       }
  //     }
  //   }
  //   setErrMessage(newValid);
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ToastContainer /> */}
      <LoginStyled>
        <Box
          sx={{
            px: { xs: 0, xl: 46 },
            width: "100%",
          }}
        >
          <Grid
            container
            component="main"
            sx={{ width: { xs: "100%", xl: "61vw" }, height: "100vh", mb: 0.5 }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage:
                  // "url(https://source.unsplash.com/random?food-drink)",
                  "url(https://picsum.photos/900/1000?random=1)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Đăng nhập
                </Typography>
                <Box
                  component="form"
                  noValidate
                  // onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    // onChange={(e) => handleInput(e, UserLogin.EMAIL)}
                    error={errMessage.email.length ? true : false}
                    helperText={errMessage.email}
                  >
                    {inputValue.email}
                  </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    // onChange={(e) => handleInput(e, UserLogin.PASS)}
                    error={errMessage.password.length ? true : false}
                    helperText={errMessage.password}
                  >
                    {inputValue.password}
                  </TextField>

                  <Grid container>
                    <Grid item xs>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lưu tài khoản"
                      />
                    </Grid>
                    <Grid item>
                      <NavLink
                        style={{ color: "#009688" }}
                        to="/forgot-password"
                      >
                        <Typography sx={{ paddingTop: "1px", color: "#000" }}>
                          Quên mật khẩu
                        </Typography>
                      </NavLink>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        width: { xs: "90%", xl: "65%" },
                        mt: 3,
                        mb: 2,
                        borderRadius: "25px",
                        height: { xs: "50px" },
                        bgcolor: "#28A745",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Box>

                  <Divider sx={{ mt: 5, p: "0 50px" }}>
                    <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontWeight: "normal",
                        fontSize: 14,
                      }}
                    >
                      Hoặc
                    </Typography>
                  </Divider>

                  {/* <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  > */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: { xs: "90%", xl: "65%" },
                        mt: 3,
                        mb: 0,
                        bgcolor: "#067ACC",
                        borderRadius: "25px",
                        height: { xs: "50px", xl: "45px" },
                        // fontWeight:'bold',
                        "&:hover": {
                          bgcolor: "#2b6d91",
                        },
                      }}
                    >
                      <FacebookIcon fontSize="medium" sx={{ mr: 2 }} />
                      Đăng nhập với FaceBook
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: { xs: "90%", xl: "65%" },
                        mt: 3,
                        mb: 0,
                        bgcolor: "#F75452",
                        borderRadius: "25px",
                        height: { xs: "50px", xl: "45px" },
                        // fontWeight:'bold',
                        "&:hover": {
                          bgcolor: red[600],
                        },
                      }}
                    >
                      <GoogleIcon fontSize="medium" sx={{ mr: 2 }} />
                      Đăng nhập với Google
                    </Button>
                  </Box>

                  {/* </Box> */}
                  <Box
                    sx={{
                      mt: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NavLink
                      style={{ color: "#009688", textDecoration: "none" }}
                      to="/register"
                    >
                      <Box
                        sx={{
                          display: " flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#000" }}>
                          Chưa có tài khoản?
                        </Typography>
                        <Typography
                          sx={{
                            color: "#067ACC",
                            // color: "#000",
                            textDecoration: "underline",
                            fontWeight: "bold",
                          }}
                        >
                          &nbsp;Đăng ký ngay
                        </Typography>
                      </Box>
                    </NavLink>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </LoginStyled>
    </ThemeProvider>
  );
};

export default memo(LogInForm);
