import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "../../components/TaskListItem";
import NavTask from "../../components/NavTask";
import NoResultsError from "../../components/NoResultsError";

/*
 * TasksAll (Parent Component):
 * This component manages the list of all tasks, including fetching, deleting,
 * marking as completed, searching for tasks and filtering/ordering tasks and more.
 *
 * Responsibilities:
 * - Fetches and displays the list of all tasks with a default display
 *   of tasks ordered by creation date in descending order.
 * - Handles task deletion.
 * - Handles marking tasks as completed.
 * - Enables filtering tasks based on search.
 * - Enables ordering tasks based on user selected options.
 * - Enables filtering tasks based on selected priority.
 */

function TasksAll() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("-created_at"); // Default order of tasks
  const [selectedPriority, setSelectedPriority] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    // Fetches all tasks when component mounts
    const fetchTasks = async () => {
      try {
        const response = await axiosReq.get(
          `/tasks/?ordering=${orderBy}&priority=${selectedPriority}`
        );
        setTasks(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [orderBy, selectedPriority]);

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
      <NavTask // Props to child Nav-Task
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
      />
      <Row className="mt-4">
        <Col>
          <ListGroup>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskListItem // Props to child Task-List-Item
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onMarkAsCompleted={markAsCompleted}
                />
              ))
            ) : (
              <NoResultsError /> // No results found component
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TasksAll;
