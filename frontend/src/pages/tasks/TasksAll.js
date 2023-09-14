import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "./TaskListItem";

function TasksAll() {
  const [tasks, setTasks] = useState([]);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosReq.get("/tasks/");
        setTasks(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>All Tasks</h2>
          <ListGroup>
            {tasks.map((task) => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TasksAll;
