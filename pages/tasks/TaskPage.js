import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import Nav from "react-bootstrap/Nav";

import { useParams } from "react-router";
import { axiosReq } from "../../../api/axiosDefaults";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] });
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }] = await Promise.all([
          axiosReq.get(`/task/${id}`),
        ]);
        setTask({ results: [task] });
        console.log(task);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
<Nav justify variant="tabs" defaultActiveKey="/home">

  <Nav.Item>
    <Nav.Link eventKey="/tasks/create">Tasks</Nav.Link>
  </Nav.Item>
  
  <Nav.Item>
    <Nav.Link eventKey="link-1">Habits</Nav.Link>
  </Nav.Item>

</Nav>
);
}


export default TaskPage