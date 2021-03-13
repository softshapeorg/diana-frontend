import { GetServerSideProps } from "next";
import { Container } from "react-bootstrap";

import { serverSideAuthentication } from "../../utils";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <Container fluid>
      <h1>Profile page</h1>
    </Container>
  );
};

const getServerSideProps: GetServerSideProps = serverSideAuthentication(true);

export default Profile;

export { getServerSideProps };
