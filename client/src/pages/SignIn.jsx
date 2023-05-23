import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
// import jwt_decode from "jwt-decode";
import { setCredentials } from "../api/authSlice";
import { useLoginMutation } from "../api/usersApiSlice";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
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
     console.log(res)
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
            {/* <h4>OR</h4>
            <div className="googleButton">
              <div id="signInDiv"></div>
            </div> */}
          </FormControl>

          <Button type="submit" colorScheme="blue" onClick={submitHandler}>
            Submit
          </Button>
          <p>
            Don't have an account? Please
            <span>
              <Link to="/signup">Sing Up</Link>
            </span>
          </p>
        </div>
      </div>
      <HomeImag />
    </div>
  );
};

export default SignIn;
