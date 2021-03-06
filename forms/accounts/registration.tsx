import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Col, Spinner, Alert } from "react-bootstrap";

import fields from "../fieldVS";
import { requests } from "../../utils";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  firstName: fields.requiredMinMax("First Name", 2, 16),
  lastName: fields.requiredMinMax("Last Name", 2, 16),
  username: fields.requiredMinMax("Username", 2, 16),
  email: fields.email(),
  password: fields.requiredMinMax("Password", 8, 32),
});

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = (props) => {
  const [registrationSucceed, setRegistrationSucceed] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      try {
        await requests.user.registration(values);
        setRegistrationSucceed(true);
      } catch (err) {
        for (let field in err.response.data) {
          setFieldError(field, err.response.data[field]);
        }
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Alert variant="success" show={registrationSucceed}>
        You have successfully registered your account
      </Alert>
      <Form.Group>
        <Form.Row>
          <Col xs={6}>
            <Form.Control
              placeholder="First Name"
              name="firstName"
              isInvalid={
                !!(formik.touched.firstName && formik.errors.firstName)
              }
              {...formik.getFieldProps("firstName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Col>

          <Col xs={6}>
            <Form.Control
              placeholder="Last Name"
              name="lastName"
              isInvalid={!!(formik.touched.lastName && formik.errors.lastName)}
              {...formik.getFieldProps("lastName")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Control
          placeholder="Username"
          name="username"
          isInvalid={!!(formik.touched.username && formik.errors.username)}
          {...formik.getFieldProps("username")}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.username}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Control
          placeholder="Email"
          name="email"
          isInvalid={!!(formik.touched.email && formik.errors.email)}
          {...formik.getFieldProps("email")}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          isInvalid={!!(formik.touched.password && formik.errors.password)}
          {...formik.getFieldProps("password")}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Button block type="submit">
          {formik.isSubmitting ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default RegistrationForm;
