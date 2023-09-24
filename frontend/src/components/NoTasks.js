import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import styles from "../styles/NoTasks.module.css";

/*
 * No Tasks (Component):
 * This component is displayed when the user don't have any tasks.
 *
 */

const NoTasks = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className={styles.Card}>
        <Card.Header className={styles.Header}>
          No Tasks <i className="fa-solid fa-magnifying-glass"></i>
        </Card.Header>
        <Card.Body>
          <Card.Title>Your task list is empty</Card.Title>
          <Card.Text>
            Start creating tasks to stay organized and achieve your goals!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoTasks;