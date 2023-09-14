import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/TaskDetail.module.css";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const response = await axiosReq.get(`/task/${id}`);
        setTask(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

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

export default TaskDetail;


