import Link from "next/link";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

import style from "./formWrapper.module.scss";

interface FormWrapperProps {}

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  return (
    <Container fluid className={style.container}>
      <Row className={style.content}>
        <Col lg={6} className={style.left}>
          <h1>Welcome to Diana</h1>
        </Col>

        <Col lg={6} className={style.right}>
          <ButtonGroup className={style.links}>
            <Link passHref href="/accounts/login">
              <Button>Login</Button>
            </Link>

            <Link passHref href="/accounts/registration">
              <Button>Registration</Button>
            </Link>
          </ButtonGroup>
          <section className={style.form}>{props.children}</section>
        </Col>
      </Row>
    </Container>
  );
};

export default FormWrapper;
