import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "./TaskListItem";

/* TaskAll (Parent Component):
-Fetches and manages the list of tasks.
-Handles the deletion of tasks.
-Handles marking tasks as completed. */

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

  const onDelete = async (taskId) => {
    console.log("Delete button clicked");
    try {
      await axiosReq.delete(`/task/${taskId}/`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log(error);
    }
  };

  const markAsCompleted = async (taskId, completed) => {
    try {
      await axiosReq.patch(`/task/${taskId}/`, { completed });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>All Tasks</h2>
          <ListGroup>
            {tasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onDelete={onDelete}
                onMarkAsCompleted={markAsCompleted}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TasksAll;
