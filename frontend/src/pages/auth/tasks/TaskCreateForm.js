import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router";
import { axiosReq } from "../../../api/axiosDefaults";

const TaskCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [taskData, setTaskData] = useState({
    "title": "",
    "description": "",
    "completed": false,
    "priority": null,
    "category": "",
  });

  const { title, description, priority, completed, category } = taskData;

  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("completed", completed)
    formData.append("categorry", category)

    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      history.push(`/tasks/${data.id}`);
    } catch (error) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errors.message && <div className="text-danger">{errors.message}</div>}
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
        <Form.Label>Completed</Form.Label>
        <Form.Control
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={(event) => setTaskData({ ...taskData, completed: event.target.checked })}
        />
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
      <Button variant="primary" type="submit">
        Create Task
      </Button>
    </Form>
  );
};
export default TaskCreateForm;
