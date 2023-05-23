import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel, Container } from "@chakra-ui/react";
const AddDriver = () => {
  const [licenseUpload, setLicenseUpload] = useState("");

  const [driver, setDriver] = useState({
    driverLicens: "",
    driverName: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDriver((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(driver, licenseUpload);
  };
  return (
    <Container centerContent padding={"1rem"}>
      <form onSubmit={SubmitHandler}>
        <FormControl>
          <FormLabel htmlFor="driverLicens">Driver Licencs</FormLabel>
          <Input
            type="text"
            name="driverLicens"
            placeholder="please fill driver linces"
            value={driver.driverLicens}
            
            onChange={onChangeHandler}
          />
          <FormLabel htmlFor="driverName">Driver Names</FormLabel>
          <Input
            type="text"
            name="driverName"
            placeholder="please fill driver linces"
            value={driver.driverName}
           
            onChange={onChangeHandler}
          />
          <FormLabel htmlFor="driverUplaod">Upload Driver Licencs</FormLabel>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="driverUplaod"
            placeholder="please fill driver linces"
           
            onChange={(e) => setLicenseUpload(e.target.files[0])}
          />
          <Button marginTop={'1rem'} type="submit">Submit</Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default AddDriver;
