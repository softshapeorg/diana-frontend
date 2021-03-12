import { Container } from "react-bootstrap";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Container fluid>
      <h1>Welcome to Diana</h1>
    </Container>
  );
};

export default Home;
