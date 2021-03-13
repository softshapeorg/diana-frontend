import { FormWrapper } from "../../components";
import { LoginForm } from "../../forms";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <FormWrapper>
      <LoginForm />
    </FormWrapper>
  );
};

export default Login;
