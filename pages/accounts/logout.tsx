import { Container } from "react-bootstrap";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = (props) => {
  return (
    <Container fluid>
      <h1>Logout page</h1>
    </Container>
  );
};

export default Logout;
