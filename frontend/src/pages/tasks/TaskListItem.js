import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/TaskListItem.module.css";

function TaskListItem({ task }) {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className={styles.TaskDetailHeader}>Task Details</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Title:</strong> {task.title}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Due Date:</strong> {task.due_date}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Priority:</strong> {task.priority}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Category:</strong> {task.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {task.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Completed:</strong>{" "}
              {task.completed ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskListItem;



