import React, { useState } from "react";
import { Card, Button, Fade, Modal } from "react-bootstrap";
import styles from "../styles/TaskListItem.module.css";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom";

/* 
* Task List Item (Child Component):
*
* Responsibilities:
* - Render individual task items.
* - Handle the display of task details.
* - Provide options to delete a task.
* - Provide an option to mark a task as completed.
*
*  Manages its own state for:
* - 'open': Manages whether task details should be shown or hidden.
* - 'showConfirmationModal': Manages the deletion confirmation modal.
*/

function TaskListItem({ task, onDelete, onMarkAsCompleted }) {
  const [open, setOpen] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDeleteClick = () => {
    // Shows the deletion confirmation modal when "Delete" button is clicked.
    setShowConfirmationModal(true); //Opens the deletion modal
  };

  const confirmDelete = () => {
    /* Executes the task deletion when the "Delete" button in the modal
     is clicked. */
    onDelete(task.id);
    // Invokes the onDelete function from parent component (TasksAll)
    setShowConfirmationModal(false); //Closes the deletion modal
  };

  const handleMarkAsCompletedClick = () => {
    // Invokes the markAsCompleted function from parent component (TaskAll)
    onMarkAsCompleted(task.id, !task.completed);
  };

  return (
    <Card className={`${styles.Card} ${open ? styles.expanded : ""}`}>
      <Card.Body>
        <Card.Title className={styles.Header}>
          {" "}
          <i
            className={
              task.completed
                ? "fa-regular fa-circle-check"
                : "fa-regular fa-circle"
            }
            onClick={() => handleMarkAsCompletedClick(task.id, !task.completed)}
          ></i>
          {task.title}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          <strong>Due Date:</strong> {task.due_date}
        </Card.Subtitle>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          onClick={() => setOpen(!open)}
          aria-controls={`task-details-${task.id}`}
          aria-expanded={open}
        >
          {open ? "Hide Details" : "Show Details"}
        </Button>

        <Button
          // Delete button in task item that shows modal
          className={`${btnStyles.Button} ${btnStyles.Danger}`}
          onClick={handleDeleteClick}
        >
          Delete
        </Button>

        <Button className={`${btnStyles.Button} ${btnStyles.Edit}`}>
          <Link to={`/task/${task.id}/edit`}>Edit</Link>
        </Button>

        <Fade in={open}>
          <div id={`task-details-${task.id}`}>
            <br />
            <strong>Priority:</strong> {task.priority}
            <br />
            <strong>Description:</strong> {task.description}
            <br />
            <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
            <Card.Subtitle className="mb-2 mt-4 text-muted">
              <strong>Created At:</strong> {task.created_at}
            </Card.Subtitle>
          </div>
        </Fade>
      </Card.Body>

      <Modal
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
        centered
        className={styles.FontModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Gray}`}
            onClick={() => setShowConfirmationModal(false)}
          >
            Cancel
          </Button>

          <Button
            // Delete button in modal that deletes the task
            className={`${btnStyles.Button} ${btnStyles.Danger}`}
            onClick={confirmDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default TaskListItem;
