import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "../styles/NoResultsError.module.css";

/*
 * No Results Error (Component):
 * This component is displayed when there are no search results found.
 *
 */

const NoResultsError = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className={styles.Card}>
        <Card.Header className={styles.Header}>
          Not Found <i className="fa-solid fa-magnifying-glass"></i>
        </Card.Header>
        <Card.Body>
          <Card.Title>Sorry...</Card.Title>
          <Card.Text>
            We looked everywhere and there is no task title or description
            matching your search...
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoResultsError;
