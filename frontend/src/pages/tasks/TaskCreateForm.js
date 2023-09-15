import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/TaskCreateEditForm.module.css";
//import { format } from 'date-fns';

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

const TaskCreateForm = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    category: "",
    //due_date: null,
  });

  const { title, description, priority, category } = taskData;

  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  /*
  const handleDateChange = (date) => {
    setDueDate(date);
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
    setTaskData({
      ...taskData,
      due_date: formattedDate,
    });
  };
*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("category", category);
    //formData.append("due_date", dueDate);

    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      history.push("/my-tasks/");
    } catch (error) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
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
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
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
  );
};

export default TaskCreateForm;
