import  { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import "./register.scss";
import { Link } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
const Register = () => {
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
  });

  const registerHandler = (e) => {
    const { name, value } = e.target;
    setRegisterValue((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerValue);
  };

  return (
    <div className="app_register">
      <div className="app_register_form">
        <div className="app_register_form2">
          <h1>Sing In</h1>

          <FormControl>
            <form>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                style={{ border: "1px solid black " }}
                name="email"
                value={registerValue.email}
                onChange={registerHandler}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="current-password"
                autoComplete="on"
                style={{ border: "1px solid black " }}
                name="password"
                value={registerValue.password}
                onChange={registerHandler}
              />
            </form>
          </FormControl>

          <Button type="submit" colorScheme="blue" onClick={submitHandler}>
            Submit
          </Button>
          <p>
            Don't have an account? Please
            <span>
              {" "}
              <Link to="/">Sing Up</Link>
            </span>
          </p>
        </div>
      </div>
      <HomeImag />
    </div>
  );
};

export default Register;
