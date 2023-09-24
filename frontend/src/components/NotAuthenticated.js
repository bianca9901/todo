import React from "react";
import cartoon from "../assets/cartoon.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import styles from "../styles/NotAuthenticated.module.css";

/*
 * Not Authenticated (Component):
 * This component is displayed when the user is not authenticated.
 * 
 * Responsibilities:
 * - Landing page for users who are not authenticated.
 * - Serves as a default for protected routes.
 *
 */

const NotAuthenticated = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center
    align-items-center"
    >
      <Card className={styles.Card}>
        <Card.Header className={`${styles.Header} py-5`}>
          Welcome to our platform! We are thrilled you discovered us!
        </Card.Header>
        <Card.Text className="py-3">
          This is the perfect place to start your journey towards a more
          organized and structured life, we offer a visually pleasing
          environment for you to create your tasks! to get started, please
          create an account or log in. We are here to help you stay organized
          and achieve your goals!
        </Card.Text>

        <Card.Footer>
          <p className="py-3">
            ps. This is only the start for us, more features are coming in real
            soon so stay tuned!
          </p>
          <img src={cartoon} alt="cartoon woman" height="150" />
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default NotAuthenticated;
