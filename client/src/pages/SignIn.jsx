/* eslint-disable no-unused-vars */
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
import "./signin.scss";
import { Link, useNavigate } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
// import jwt_decode from "jwt-decode";
import { setCredentials } from "../api/authSlice";
import { useLoginMutation } from "../api/usersApiSlice";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BiMailSend } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
  });
  // for Form Validation Hooks
  const [error, setErrors] = useState({});
  const [login, { useLoading }] = useLoginMutation();

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

    if (validateForm()) {
      try {
        const res = await login({ email, password }).unwrap();
        console.log(res.results.user[0].role)
        dispatch(setCredentials({ ...res }));

        toast({
          status: "success",
          position: "top",
          description: "Successful",
        });
        if(res.results.user[0].role == 'admin'){
          navigate("/admin/fleet");
        }else{
          navigate('/about')
        }
        
      } catch (err) {
        console.log(err.data.error.message);
        toast({
          status: "error",
          position: "top",
          description: err.data.error.message,
        });
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (registerValue.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (registerValue.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    

    setErrors(newErrors);
    return isValid;
  };

  return (
    <Box className="app_register">
      <HomeImag />
      <Box className="app_register_form ">
        <Box className="app_register_form2">
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
              {
                error.email && (
                  <span style={{fontSize:'15px', color:'red'}}>
                    {error.email}
                  </span>
                )
              }
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
              {
                error.password && (
                  <span style={{fontSize:'15px', color:'red'}}>
                    {error.password}
                  </span>
                )
              }
            </form>
           
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
