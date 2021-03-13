import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import { cookies } from "../../utils";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    cookies.removeAuthCookies();
    router.push("/");
  }, []);

  return (
    <Container fluid>
      <h1>Logging out...</h1>
    </Container>
  );
};

export default Logout;
