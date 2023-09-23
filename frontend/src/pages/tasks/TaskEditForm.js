import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/TaskCreateEditForm.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NotAuthenticated from "../../components/NotAuthenticated";

/*
 * TaskEditForm (Component):
 * This component represents a form for editing an existing task.
 *
 * Responsibilities:
 * - Fetches task data from the server based on the tasks ID.
 * - Allows the user to edit the tasks title, description, priority and due date.
 * - Handles the form submission by sending a PUT request to update the task.
 *
 * Additional Information:
 * A note on due date: the due date is converted to ISO format for API
 * compatibility and displayed in a nice format by the DatePicker,
 * therefore the conversions.
 */

function TaskEditForm() {
  // State management
  const [dueDate, setDueDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    due_date: "",
  });

  const { title, description, priority } = taskData;

  useEffect(() => {
    // Fetch task data from the server
    const fetchTaskData = async () => {
      try {
        const { data } = await axiosReq.get(`/task/${id}/`);
        console.log(data);
        const { title, description, priority, due_date } = data;

        setTaskData({
          // Update the state with the retrieved task data
          title,
          description,
          priority,
          due_date: new Date(due_date).toISOString(), // Convert to ISO format
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, [id]);

  const handleChange = (event) => {
    // Handle input changes
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    // Update the state for due date and convert it to ISO format for API compatibility
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
    // ^ Send the existing duedate as original value if no new due date is set

    try {
      // Send a PUT request to update the task
      await axiosReq.put(`/task/${id}/`, formData);
      history.push("/"); // Redirects to tasks after submission
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
            <h1 className={styles.Header}>edit task</h1>
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
                <Form.Label>Priority</Form.Label>
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
                className={`${btnStyles.Button} ${btnStyles.Green} ${btnStyles.Wide}`}
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

export default TaskEditForm;
