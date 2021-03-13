import { AccountFormWrapper } from "../../components";
import { RegistrationForm } from "../../forms";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <AccountFormWrapper>
      <RegistrationForm />
    </AccountFormWrapper>
  );
};

export default Home;
