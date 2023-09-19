import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "../../components/TaskListItem";
import NavTask from "../../components/NavTask";
import NoResultsError from "../../components/NoResultsError";

/*
 * TasksAll (Parent Component):
 * This component manages the list of tasks, including fetching, deleting,
 * marking as completed, and searching for tasks.
 *
 * Responsibilities:
 * - Fetches and displays the list of tasks.
 * - Allows the deletion of tasks.
 * - Handles marking tasks as completed.
 * - Enables filtering tasks based on search.
 */

function TasksAll() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosReq.get("/tasks/");
        setTasks(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  
  const onDelete = async (taskId) => {
    // Handle task deletion
    try {
      await axiosReq.delete(`/task/${taskId}/`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log(error);
    }
  };

  
  const markAsCompleted = async (taskId, completed) => {
    // Handle marking a task as completed
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

  const filteredTasks = tasks.filter((task) => {
    // Filter tasks based on searchQuery
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = task.title.toLowerCase();
    const lowerCaseDescription = task.description.toLowerCase();
    return (
      lowerCaseTitle.includes(lowerCaseQuery) ||
      lowerCaseDescription.includes(lowerCaseQuery)
    );
  });

  return (
    <Container>
      <NavTask
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <Row className="mt-4">
        <Col>
          <ListGroup>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskListItem
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onMarkAsCompleted={markAsCompleted}
                />
              ))
            ) : (
              <NoResultsError />
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TasksAll;
