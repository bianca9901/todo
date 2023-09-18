import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "../../components/TaskListItem";
import NavTask from "../../components/NavTask";

/*
 * TasksAll (Parent Component):
 * This component manages the list of tasks, including fetching, deleting,
 * marking as completed, and searching for tasks.
 *
 * Responsibilities:
 * - Fetches and displays the list of tasks.
 * - Allows the deletion of tasks.
 * - Handles marking tasks as completed.
 * - Enables searching for tasks based on user input.
 */

function TasksAll() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
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

  
  const handleSearch = async () => {
    // Handle task search
    try {
      const response = await axiosReq.get(`/tasks/?search=${searchQuery}`);
      const searchResults = response.data.results;
      setFilteredTasks(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <NavTask
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <Row className="mt-4">
        <Col>
          <h2>All Tasks</h2>
          <ListGroup>
            {filteredTasks.length > 0
              ? filteredTasks.map((task) => (
                  <TaskListItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onMarkAsCompleted={markAsCompleted}
                  />
                ))
              : tasks.map((task) => (
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
