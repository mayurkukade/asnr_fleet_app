import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
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
      <HomeImag />
      <div className="app_register_form">
        <div className="app_register_form2">
          <h1 style={{fontWeight:"700"}}>Sign Up</h1>
          <p>Create an account to start car booking</p>

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
                placeholder="First Name"
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
                placeholder="Last Name"
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
                placeholder="Email"
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
                placeholder="New Password"
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
                placeholder="Re-enter Password"
              />

              <FormLabel >Select your role</FormLabel>
              <Select placeholder="Select option" style={{border:'1px solid black'}}>
                <option value="option1">User</option>
                <option value="option2">Vendor</option>
                <option value="option3">Driver</option>
              </Select>
            </form>
          </FormControl>
          <div className="button">
            <Button type="submit" colorScheme="blue" onClick={submitHandler}>
              Submit
            </Button>
          </div>
          <p>
            Sign up already? please
            <span style={{fontWeight:'600'}}>
              <Link to="/"> Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;