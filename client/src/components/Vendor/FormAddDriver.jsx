import { Stack, Input, ButtonGroup, Button, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const FormAddDriver = ({ firstFieldRef, onCancel }) => {
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

    try {
      console.log(driver, licenseUpload);

      onCancel();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack spacing={4}>
        <FormLabel>Driver Licence No</FormLabel>
        <Input
          label="First name"
          id="driverLicens"
          name="driverLicens"
          ref={firstFieldRef}
          onChange={onChangeHandler}
          value={driver.driverLicens}
        />
        <FormLabel>Driver Name</FormLabel>
        <Input
          label="Driver Name"
          id="driverName"
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
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button onClick={SubmitHandler} colorScheme="teal">
            Save
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default FormAddDriver;
