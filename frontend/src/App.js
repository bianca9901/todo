import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/esm/Container";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TasksAll from "./pages/tasks/TasksAll";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import MyProfile from "./pages/profile/MyProfile";
import NotAuthenticated from "./components/NotAuthenticated";

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/task/create" render ={() => <TaskCreateForm/>}/>
          <Route exact path="/task/:id/edit" render ={() => <TaskEditForm/>}/>
          <Route exact path="/tasks/" render ={() => <TasksAll/>}/>
          <Route exact path="/profile/" render ={() => <MyProfile/>}/>
          <Route exact path="/noauth/" render ={() => <NotAuthenticated/>}/>
          <Route render={() => <p>Page Not Found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
