import  { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import "./register.scss";
import { Link } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
const Register = () => {
  const [registerValue, setRegisterValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
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
          <h1>Sing Up</h1>
          <p>create an account to start car booking</p>

          <FormControl>
            <form>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                id="firstname"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="firstname"
                value={registerValue.firstname}
                onChange={registerHandler}
              />
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                id="lastname"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="lastname"
                value={registerValue.lastname}
                onChange={registerHandler}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                id="email"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="email"
                value={registerValue.email}
                onChange={registerHandler}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="new-password"
                id="new-password"
                autoCapitalize="on"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="password"
                value={registerValue.password}
                onChange={registerHandler}
              />
              <FormLabel>Re-enter password</FormLabel>
              <Input
                type="current-password"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="repassword"
                id="current-repassword"
                value={registerValue.repassword}
                onChange={registerHandler}
                autoCapitalize="on"
              />
            </form>
          </FormControl>

          <Button type="submit" colorScheme="blue" onClick={submitHandler}>
            Submit
          </Button>
          <p>
            Sing up already? please{" "}
            <span>
              {" "}
              <Link to="/sign">Sing in</Link>
            </span>
          </p>
        </div>
      </div>
      <HomeImag />
    </div>
  );
};

export default Register;
