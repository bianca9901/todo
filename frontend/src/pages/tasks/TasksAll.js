import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Row, Col, ListGroup } from "react-bootstrap";
import TaskListItem from "../../components/TaskListItem";
import NavTask from "../../components/NavTask";
import NoResultsError from "../../components/NoResultsError";
import Asset from "../../components/Asset";
import Note from "../../components/Note";
import NotAuthenticated from "../../components/NotAuthenticated";
import NoTasks from "../../components/NoTasks";

/*
 * TasksAll (Parent Component):
 * This component manages the complete task list, handling actions like 
 * fetching, deleting, and marking tasks as completed.
 * 
 * TasksAll has two direct child components, NavTask and TaskListItem, to which
 * it passes necessary props. While most logic is modularized within these child
 * components, API calls are managed by TasksAll, the parent.
 * 
 * - NavTask: Renders the task-related navigation bar, including the search
 *   input field and dropdown menus for filtering and ordering.
 * 
 * - TaskListItem: Renders individual task items with buttons to perform actions
 *   such as delete, mark as completed, and edit.
 * 
 * Additionally, TasksAll utilizes three more components:
 * 
 * - "Note" is rendered beside the tasks always.
 * 
 * - "No Results Error" is rendered when no search results are found.
 * 
 * - "Not Authenticated" is rendered when the user is not authenticated.
 */

function TasksAll() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("-created_at"); // Default order of
  //tasks
  const [selectedPriority, setSelectedPriority] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = useCurrentUser();

  useEffect(() => {
    // Fetches all tasks when component mounts or when
    // orderBy or selectedPriority changes
    const fetchTasks = async () => {
      try {
        const response = await axiosReq.get(
          `/tasks/?ordering=${orderBy}&priority=${selectedPriority}`
        );
        setTasks(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
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
    <>
      {currentUser ? (
        <>
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
              {isLoading ? ( // Displays a spinner when tasks are being fetched
                <Asset spinner message="Loading your tasks..." />
                ) : tasks.length === 0 ? (
                  <NoTasks/> // Task list is empty component
              ) : (
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
              )}
            </Col>
            <Col>
              <Note /> {/* Note Component */}
            </Col>
          </Row>
        </>
      ) : (
        <NotAuthenticated /> // Not an authenticated user component
      )}
    </>
  );
}

export default TasksAll;
