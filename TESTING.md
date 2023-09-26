# Testing

## Quality assurance

### JavaScript

**ESLint was used from the beginning in this workspace, it immediately identifies potential errors, that I could fix right away. It helped me keep my code clean.**

![ESlint](documentation/eslint.png)

**I used VSCode and utilized Microsoft ESLint extension.**

![ESlint Microsoft](documentation/microsoft-eslint.png)

### Python

**All Python files were checked individually at the official [Code Institute](https://pep8ci.herokuapp.com) pep8 validator and no errors were found.**

![python validator](documentation/pep8.png)

### CSS

**CSS was validated by direct input on every CSS file at the official [Jigsaw](https://jigsaw.w3.org/css-validator/) website and no errors were found.**

![css validator](documentation/jigsaw.png)


## Frontend testing

### Testing for creating a task:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Click Create Task | Click the "Create Task" button. | User should be redirected to the task creation form. | Yes | Yes |
| The task creation form | The task creation form should render properly displaying a text field for the title and description, a selection box for priority, and a datetime field. | Form should render properly.| Yes | Yes |
| Submitting form without typing a title | Submit the form without typing a title. | An error message should appear, preventing submission. | Yes | Yes |
| If writing a title (and/or) filling in other fields | Enter a title and other fields and submit the form. | User should be redirected to the home page and see their task and task information. | Yes | Yes |
---

### Testing for deleting task:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Clicking on the delete button for a task | Click the "Delete" button. | A modal should appear asking if the user is sure they want to delete their task. | Yes | Yes |
| Clicking on the delete button in the modal | Click on the "Delete" button in the modal. | The modal should disappear, and the task should be deleted and no longer visible. | Yes | Yes |
---

### Testing for editing task:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Clicking on the edit button for a task | Click the "Edit" button. | User should be redirected to an edit task form pre-populated with the task's title, description, priority selection, and due date. | Yes | Yes |
| Submitting the form without typing a title | Delete the title and try to submit the form. | A warning should appear, preventing submission. | Yes | Yes |
| Submitting the form with changes | Make changes and submit the form. | User should be redirected to the home page with the updated task. | Yes | Yes |
---

### Testing for searching tasks:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Entering a search query in the search bar | Enter a search query in the search bar. | Tasks with matching titles or descriptions should appear. | Yes | Yes |
| Entering a search query with no matches | Enter a search query with no matching tasks. | A "No Results Found" component should appear. | Yes | Yes |
---


### Testing for filtering tasks:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Clicking "Filter by Priority" | Click on "Filter by Priority" to show the options. | A dropdown with priority options should appear. | Yes | Yes |
| Selecting "High" Priority | Select "High" priority. | Only tasks with high priority should appear. | Yes | Yes |
| Selecting "Medium" Priority | Select "Medium" priority. | Only tasks with medium priority should appear. | Yes | Yes |
| Selecting "Low" Priority | Select "Low" priority. | Only tasks with low priority should appear. | Yes | Yes |
| Clearing the Priority Filter | Click on the icon to clear the priority filter. | All tasks should be displayed without filtering. | Yes | Yes |
---

### Testing for ordering tasks:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Clicking "Order by" | Click on "Filter by Priority" to show the options. | A dropdown with ordering options should appear. | Yes | Yes |
| Selecting "Created At" in ascending order. | Select "Created at" in ascending order | Tasks should be reordered by creation date in ascending order. | Yes | Yes |
| Selecting "Created At" in descending order. | Select "Created at" in descending order | Tasks should be reordered by creation date in descending order. | Yes | Yes |
| Selecting "Due Date" in ascending order. | Select "Due Date" in ascending order | Tasks should be reordered by the due date in ascending order. | Yes | Yes |
| Selecting "Due Date" in descending order. | Select "Due Date" in descending order | Tasks should be reordered by the due date in descending order. | Yes | Yes |
---

### Testing for marking tasks as completed/uncompleted:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Marking a task as completed | Click the icon to mark a task as completed | A checkmark should be filled inside the circle, and text in the details should update to Completed: Yes | Yes | Yes |
| Marking task as uncompleted | Click the icon checked icon on a task that is completed | The checkmark should be gone and the initial circle should be displayed and the text in the details should update to Completed: No | Yes | Yes |

### Testing as a new user or as someone who deleted all their tasks:
| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| New user interface | As a newly signed up user, or someone who deleted all their tasks |  A "You have no tasks" component should appear. | Yes | Yes |
---

### Testing for creating notes:

| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Going to the homepage | Navigate to homepage | A "My Notes" component should appear | Yes | Yes |
| My Notes component | The "My Notes" component should have a text box with a placeholder of "Enter your notes here" and a "Create Note" button. | The component should render properly. | Yes | Yes |
| Creating a note | Enter text in the text box and click "Create Note." | The note should appear below the "Create Note" button. | Yes | Yes |
| Creating a note without typing | Click "Create Note" without entering text. | Nothing should happen. | Yes | Yes |
---

### Testing for deleting note:
| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Note deletion | If there is at least one note, a corresponding delete button should appear. | Clicking the delete button should remove the note. | Yes | Yes |
---

### Testing Profile:
| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Test profile | As an authenticated user, click the profile icon in the navbar | A welcome message with the username and account creation date should appear. | Yes | Yes |


### Testing authentication
| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| Testing registration | As an unauthenticated user, go to any page and see a "Sign Up" button in the navbar. | Clicking "Sign Up" should redirect to a sign-up form. | Yes | Yes |
| Sign-Up form | The sign-up form should display text fields for username, password, and confirm password. | Form should render properly. | Yes | Yes |
| Entering an existing username | Enter a username that already exists. |  A warning message should appear. | Yes | Yes |
| Entering a Short Password | Enter a password that is too short. | A warning message should appear. | Yes | Yes |
| Entering a Common Password | Enter a common password. | A warning message should appear. | Yes | Yes |
| Successful Sign Up | Enter valid details and sign up. | User should be redirected to the sign-in page | Yes | Yes |
| Switching to sign in | In the sign-up form, click "Already have an account? Sign In" |
The user should be redirected to the sign-in page. | Yes | Yes |
| Testing Sign-In | As an unauthenticated user, click the sign-in icon in the navbar | User should be redirected to the sign-in page. | Yes | Yes |
| Sign-In form | The sign-in form should display text fields for username and password. | Form should render properly. | Yes | Yes |
| Entering wrong credentials | Enter incorrect credentials | An error message should appear | Yes | Yes |
| Entering correct credentials | User should be redirected to the homepage | Yes | Yes |
| Switching to Sign-Up | In the sign-in form, click "Don't have an account? Sign Up"| User should be redirected to the sign-up page | Yes | Yes |
| Testing Sign-Out | As a logged-in user, click the "Sign Out" icon | User should be redirected to the homepage without authentication. | Yes | Yes |
---

### Testing protected routes as a signed-out user
| Test | Steps | Expected Result | Tested | Passed |
| ---- | ----- | --------------- | ------ | ------ |
| "/Profile" | Type /Profile in the URL | A fallback component should display | Yes | Yes |
| "/Task/Create" | Type /Task/Create in the URL | A fallback component should display | Yes | Yes |
| "/Task/:id/Edit" | Type /Task/(some number here)/Edit in the URL | A fallback component should display | Yes | Yes |
| "/" | Go to the homepage | A fallback component should display | Yes | Yes |
---


## Backend testing

All API endpoints were tested using [Postman](https://www.postman.com/). Various scenarios were explored, including cases such as providing incorrect credentials, attempting to access endpoints without authentication, submitting requests with missing required fields, thorough testing of CRUD functionality, and verifying that users could not access tasks or notes that does not belong to the authenticated user. These comprehensive tests ensured the security of the API.


**GET: the only not protected endpoint:**
![get api](documentation/api-testing/get-api.png)
Works as it should.

**POST: Log-in to API without sending credentials:**
![get api](documentation/api-testing/login-no-password.png)
Works as it should.

**POST: Log-in to API with valid credentials:**
![get api](documentation/api-testing/login-get-access-token.png)
Works as it should.

**Get note or tasks without credentials:**
![get note](documentation/api-testing/get-note-no-auth.png)
![got task](documentation/api-testing/get-task-no-auth.png)

**Get notes or tasks without credentials:**
![get notes](documentation/api-testing/get-notes-no-auth.png)
![got tasks](documentation/api-testing/get-tasks-no-auth.png)

**Patch note without credentials:**
![patch note](documentation/api-testing/patch-task-no-auth.png)

**Put note without credentials:**
![put note](documentation/api-testing/put-task-no-auth.png.png)

**Delete note or task without credentials:**
![delete note](documentation/api-testing/delete-note-no-auth.png)
![delete task](documentation/api-testing/delete-task-no-auth.png)

**Post note without credentials:**
![post notes](documentation/api-testing/post-notes-no-auth.png)

**Post task without credentials:**
![post tasks](documentation/api-testing/post-tasks-no-auth.png)

**Get tasks with credentials:**
![get tasks](documentation/api-testing/get-all-tasks.png)
Works as it should.

**Post a task with credentials:**
![post tasks](documentation/api-testing/post-task.png)
Works as it should.

**Post a task without required field with credentials**
![post tasks without credentials](documentation/api-testing/post-task-without-req.png)
Works as it should.

**Get a task by id with credentials**
![get task by id](documentation/api-testing/get-task-by-id.png)
Works as it should.

**Delete a task with credentials:**
![delete task](documentation/api-testing/delete-task.png)
Works as it should.

** Try to Get task after deletion with credentials:**
![get task after deletion](documentation/api-testing/get-task-after-deletion.png)
Works as it should.

**Patch a task as 'completed' with credentials:**
![patch completed task](documentation/api-testing/patch-completed-task-status.png)
Works as it should.

**Try to Put a task without required field with credentials:**
![put field required](documentation/api-testing/put-field-required.png)
Works as it should.

**Put a task with required field and with credentials:**
![get api](documentation/api-testing/put-task-title.png)
Works as it should.

**Delete a task with credentials:**
![get api](documentation/api-testing/delete-task.png)
Works as it should.

**Post a note without required field with credentials:**
![get api](documentation/api-testing/post-note-without-req.png)
Works as it should.

**Post a note with required field with credentials:**
![get api](documentation/api-testing/post-note-valid-req.png)
Works as it should.

**Post a note with credentials:**
![get api](documentation/api-testing/post-note.png)
Works as it should.

**Try get a note after deletion with credentials:**
![get api](documentation/api-testing/get-note-after-deletion.png)
Works as it should.

---