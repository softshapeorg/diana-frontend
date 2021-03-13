import { Container } from "react-bootstrap";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <Container fluid>
      <h1>Profile page</h1>
    </Container>
  );
};

export default Profile;
