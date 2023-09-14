import React, { useState } from "react";
import { ListGroup, Button, Fade } from "react-bootstrap";
import styles from "../../styles/TaskListItem.module.css";
import btnStyles from "../../styles/Button.module.css";

function TaskListItem({ task }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <strong>Title:</strong> {task.title}
        <br />
        <strong>Due Date:</strong> {task.due_date}
        <br />
        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
          onClick={() => setOpen(!open)}
          aria-controls={`task-details-${task.id}`}
          aria-expanded={open}
        >
          Show Details
        </Button>
        <Fade in={open}>
          <div id={`task-details-${task.id}`}>
            <strong>Priority:</strong> {task.priority}
            <br />
            <strong>Category:</strong> {task.category}
            <br />
            <strong>Description:</strong> {task.description}
            <br />
            <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
          </div>
        </Fade>
      </ListGroup.Item>
    </>
  );
}

export default TaskListItem;
