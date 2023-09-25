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


## Manual testing

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
