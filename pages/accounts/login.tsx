import { AccountFormWrapper } from "../../components";
import { LoginForm } from "../../forms";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <AccountFormWrapper>
      <LoginForm />
    </AccountFormWrapper>
  );
};

export default Login;
