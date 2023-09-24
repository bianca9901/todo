import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/TaskCreateEditForm.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NotAuthenticated from "../../components/NotAuthenticated";

/*
 * TaskCreateForm (Component):
 * This component represents a form for creating a new task.
 *
 * Responsibilities:
 * - Collects user input for creating a new task, including title, description,
 *   priority and due date.
 * - Handles the form submission by sending a POST request to create the task.
 */

function TaskCreateForm() {
  // State management
  const [dueDate, setDueDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const currentUser = useCurrentUser();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    due_date: "",
  });

  const { title, description, priority } = taskData;

  const handleChange = (event) => {
    // Handle input changes
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    // Update the state for due date and convert it to ISO format for API
    //compatibility
    setDueDate(date);
    setTaskData({
      ...taskData,
      due_date: date.toISOString(),
    });
  };

  const handleSubmit = async (event) => {
    // Handle form submission
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("due_date", taskData.due_date);

    try {
      // Send a POST request to create a new task
      await axiosReq.post("/tasks/", formData);
      history.push("/"); // Redirect to homepage after submission
    } catch (error) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <>
      {currentUser ? (
        <Card className={styles.Card}>
          <Card.Body>
            <h1 className={styles.Header}>new task</h1>
            <Form onSubmit={handleSubmit}>
              {errors.message && (
                <div className="text-danger">{errors.message}</div>
              )}
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
                {errors.title?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="select"
                  name="priority"
                  value={priority}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Control>
              </Form.Group>
              <small className="text-muted">
                A due date helps you stay organized! If you don't choose one,
                we'll set it to today.{" "}
              </small>
              <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <DatePicker
                  selected={dueDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  name="due_date"
                  className="form-control"
                />
              </Form.Group>
              <Button
                className={`${btnStyles.Button}
                ${btnStyles.Green}
                ${btnStyles.Wide}`}
                type="submit"
              >
                Create Task
              </Button>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <NotAuthenticated />
      )}
    </>
  );
}

export default TaskCreateForm;
