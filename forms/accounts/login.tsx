import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Form, Button, Spinner, Alert } from "react-bootstrap";

import fields from "../fieldVS";
import { login } from "../../redux/actions";
import { State, UserState } from "../../types";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: fields.requiredMinMax("username", 2, 16),
  password: fields.requiredMinMax("password", 8, 32),
});

interface LoginFormProps {
  user: UserState;
  login: Function;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      props.login(values.username, values.password);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Alert variant="danger" show={!!props.user.err}>
        Unable to login with the given credentials
      </Alert>
      <Form.Group>
        <Form.Control
          placeholder="Username"
          name="username"
          {...formik.getFieldProps("username")}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          {...formik.getFieldProps("password")}
        />
      </Form.Group>

      <Form.Group>
        <Button block type="submit">
          {props.user.isLoading ? (
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
            "Login"
          )}
        </Button>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Function) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
