import { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  FormControl,
  Input,
  Flex,
  Icon,
  Text,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
// import jwt_decode from "jwt-decode";
import { setCredentials } from "../api/authSlice";
import { useLoginMutation } from "../api/usersApiSlice";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BiMailSend } from "react-icons/Bi";
import { RiLockPasswordLine } from "react-icons/Ri";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
  });
  const [login, { useLoading }] = useLoginMutation();
  // function handleCallbackResponse(response) {
  //   console.log("Ended JWT Id token:" + response.credential);
  //   const userObject = jwt_decode(response.credential);
  //   console.log(userObject);

  // localStorage.setItem('persistname',userObject.given_name)
  //     navigate("/admin");
  //   }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "854208234654-kc0p94c1rrumg1mgllpkq1ses2992mp8.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // },);
  const registerHandler = (e) => {
    const { name, value } = e.target;
    setRegisterValue((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(registerValue);
    const { email, password } = registerValue;

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      toast({ status: "success", position: "top", description: "Successful" });
      navigate("/admin/fleet");
    } catch (err) {
      console.log(err.data.error.message);
      toast({
        status: "error",
        position: "top",
        description: err.data.error.message,
      });
    }
  };

  return (
    <Box className="app_register">
      <HomeImag />
      <Box className="app_register_form ">
        <Box
          className="app_register_form2 "
          style={{ width: "50%", height: "55%", fontSize: "20px" }}
        >
          <h1 style={{ fontWeight: "700" }}>Sign In</h1>
          <FormControl>
            <form>
              <Flex paddingTop={"10px"}>
                <Icon as={BiMailSend} fontSize="25px"></Icon>
                <FormLabel>Email</FormLabel>
              </Flex>
              <Input
                type="email"
                id="email"
                style={{ border: "1px solid black " }}
                name="email"
                value={registerValue.email}
                onChange={registerHandler}
                placeholder="Email"
              />
              <Flex paddingTop={"10px"}>
                <Icon as={RiLockPasswordLine} fontSize="25px"></Icon>
                <FormLabel>Password</FormLabel>
              </Flex>
              <Input
                type="password"
                id="current-password"
                autoComplete="on"
                style={{ border: "1px solid black" }}
                name="password"
                value={registerValue.password}
                onChange={registerHandler}
                placeholder="Password"
              />
            </form>
            {/* <h4>OR</h4>
         <Box className="googleButton">
           <Box id="signInBox"></Box>
         </Box> */}
          </FormControl>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              colorScheme="blue"
              onClick={submitHandler}
              style={{ fontSize: "20px", marginTop: "15px" }}
            >
              Submit
            </Button>
          </Box>
          <Text paddingTop="5px" fontSize="1px">
            Don&apos;t have an account?
            <br /> Please
            <span style={{ fontWeight: "600" }}>
              <Link to="/signup"> SignUp</Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
