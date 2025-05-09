# Authentication Project

Read the task in the `task.md` file.

## What should we do after a new task is pushed?

1. `git checkout main` – to switch to the main branch
2. Pull the latest changes from the main branch on GitHub
3. Copy the new task to your notes
4. `git checkout` back to your working branch (e.g., `main-page1`)
5. Do the task, and **pull before pushing** after you've completed it

---

### 📂 Rules for Git Branch Naming

Branch names should follow this structure:

```
{prefix}/{item}
```

**Examples:**

- `feature/login-page`
- `refactor/file-structure`

🔁 After the purpose of a branch is fulfilled (e.g., finishing the login page or restructuring the file system),
**merge it into `main`** and create a **new branch** for the next task.

---

### ✍️ Rules for Git Commit Messages

The commit message format should be:

```
{prefix}: message here...
```

Optionally followed by:

- Detailed point if needed
- Another detail if needed

**Example:**

```
feat: add button to login page

- Used 2rem padding
- Set background color to red
```

**Prefix List:**

- `feat` (feature): Use when adding something new (e.g., a button, feature, logic, or function)
- `style`: Use when changing styles (CSS) without modifying the structure
- `refactor`: Use when restructuring code (e.g., renaming variables, deleting comments, reorganizing lines)
