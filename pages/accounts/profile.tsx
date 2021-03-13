import { GetServerSideProps } from "next";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import { serverSideAuthentication } from "../../utils";
import { withUserState } from "../../components";
import { State, UserState } from "../../types";

interface ProfileProps {
  user: UserState;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <Container fluid>
      <h1>Profile page</h1>
    </Container>
  );
};

const getServerSideProps: GetServerSideProps = serverSideAuthentication(true);

const mapStateToProps = (state: State) => ({
  user: state.user,
});

export default withUserState(connect(mapStateToProps)(Profile));
export { getServerSideProps };
