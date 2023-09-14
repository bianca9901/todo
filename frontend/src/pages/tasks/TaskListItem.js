import React, { useState } from "react";
import { Card, Button, Fade } from "react-bootstrap";
import styles from "../../styles/TaskListItem.module.css";
import btnStyles from "../../styles/Button.module.css";

function TaskListItem({ task }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className={styles.Card}>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Due Date: {task.due_date}
        </Card.Subtitle>
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
      </Card.Body>
    </Card>
  );
}

export default TaskListItem;
