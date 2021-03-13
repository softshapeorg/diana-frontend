import { GetServerSideProps } from "next";
import { Container } from "react-bootstrap";
import { serverSideAuthenticate } from "../../utils";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <Container fluid>
      <h1>Profile page</h1>
    </Container>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const user = await serverSideAuthenticate(context);
    return {
      props: {
        user,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/accounts/login",
        permanent: false,
      },
    };
  }
};

export default Profile;

export { getServerSideProps };
