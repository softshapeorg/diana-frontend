import { connect } from "react-redux";

import { User } from "../../types";
import { setUser } from "../../redux/actions";

const withUserState = (Component: any) => {
  interface WrapperProps {
    user: User;
    setUser: Function;
  }

  const Wrapper: React.FC<WrapperProps> = (props) => {
    props.setUser(props.user);
    return <Component {...props} />;
  };

  const mapDispatchToProps = (dispatch: Function) => ({
    setUser: (user: User) => dispatch(setUser(user)),
  });

  return connect(null, mapDispatchToProps)(Wrapper);
};

export default withUserState;
