import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import { axiosReq } from "../api/axiosDefaults";
import styles from "../styles/Note.module.css";
import btnStyles from "../styles/Button.module.css";

/*
 * Note (Component):
 * This component manages the list of all notes.
 *
 * Responsibilities:
 * - Fetches and displays the list of all notes
 * - Handles note creation.
 * - Handles note deletion.
 */

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    // Fetches all notes when component mounts
    const fetchNotes = async () => {
      try {
        const response = await axiosReq.get("notes/");
        setNotes(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, []);

  const onCreate = async () => {
    // Handles note creation
    try {
      const response = await axiosReq.post("notes/", {
        content: noteContent,
      });
      setNotes([...notes, response.data]);
      setNoteContent(""); // Clears the input field after creating a note
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (noteId) => {
    // Handles note deletion and removes the deleted note from the list
    try {
      await axiosReq.delete(`note/${noteId}/`);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Card className={styles.Card}>
          <Card.Header className={styles.Header}>My Notes</Card.Header>

          <Card.Body>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your note here..."
              value={noteContent}
              onChange={(event) => setNoteContent(event.target.value)}
            />

            <Button
              onClick={onCreate}
              size="sm"
              className={btnStyles.CreateNote}
            >
              Create Note
            </Button>

            {notes.map((note) => (
              <div key={note.id}>
                <hr className={styles.NoteDivider} />
                <Card.Text>{note.content}</Card.Text>
                <Button
                  onClick={() => onDelete(note.id)}
                  className={`${btnStyles.Button} ${btnStyles.Danger}`}
                >
                  Delete
                </Button>
                <hr className={styles.NoteDivider} />
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Note;
