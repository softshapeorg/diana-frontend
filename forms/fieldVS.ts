import * as yup from "yup";

const email = () => {
  return yup
    .string()
    .email("Not a valid email.")
    .required("Email field is required.");
};

const requiredMinMax = (name: string, min: number, max: number) => {
  return yup
    .string()
    .min(min, `${name} field's minimum number of characters is ${min}`)
    .max(max, `${name} field's maximum number of characters is ${max} `);
};

const fields = {
  email,
  requiredMinMax,
};

export default fields;
