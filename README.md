# Our Class Pet Gallery: Git Collaboration Activity

Welcome to our first collaborative coding project! In this activity, you will learn the "GitHub Flow" by adding your own pet(s) (or a favorite animal) to our shared class gallery.

---

## The Workflow Steps

### 1. Create an Issue
* Navigate to the **Issues** tab of this main repository.
* Click **New Issue** and use the provided template.
* Title it: `Add [Pet Name] by [Your Name]`.
  
  *example: `Add Lady Cat by Sam`*
  * if adding multiple pets: `Add [Pet Name] and [Pet name] by [Your Name]`. 
* Submit the issue and take note of the **Issue Number** (e.g., #5).

### 2. Fork this Repo
* Click the **Fork** button near the top-right corner of this page.
* Select your own GitHub account as the destination, as we've been doing so far.
* Wait for GitHub to create a copy of the project in your profile.

### 3. Clone your Fork
* On **your forked repository page**, click the green **<> Code** button and copy the HTTPS URL.
* Open your terminal and run:
    ```bash
    git clone [URL_YOU_COPIED]
    cd 11_github-collaboration-project-pet-shop
    ```
  * You can also do this using GitHub Desktop, of course 

### 4. Branch Locally
* Create a new branch named after your issue to keep your work organized:
    ```bash
    git checkout -b issue-[number]-add-[pet-name]
    # example: git checkout -b issue-1-add-lady-cat
    ```

### 5. Make Your Changes
* **Add your Image:** Move your pet's photo into the `/assets` folder. 
* **Rename the File:** Ensure it follows the format: `studentName_petName.jpg` (e.g., `sam_ellie.jpg` or `sam_lady-cat.jpg`).
* **Register the Pet:** Open `app.js` and add your filename (including extension) to the `petImages` array.
* **Test:** Open `index.html` in your browser to ensure your card appears correctly!

### 6. Commit & Push using the CLI/terminal
* Stage your changes:
    ```bash
    git add .
    ```
* Create a commit that references your issue number:
    ```bash
    git commit -m "Add [Pet Name] by [Your Name] - Closes #[issue-number]"
    # example: git commit -m "Add Lady Cat by Sam - Closes #1"
    ```
    
* Push the branch to your GitHub fork:
    ```bash
    git push origin issue-[number]-add-[pet-name]
    # example: git push origin issue-1-add-lady-cat
    ```

### 7. Send a Pull Request (PR)
* Go to **your fork** on GitHub. You should see a "Compare & pull request" button.
* Ensure the **base repository** is the original class repo and the **head repository** is your fork and the **branch** is your issue branch.
* In the description, write `Closes #[issue-number]`.
* Submit the PR! I will review it and merge it into the main gallery.

---

## ⚠️ Resolving Conflicts (If your branch is out of sync)
If other students' PRs are merged before yours, your branch might fall behind. This will be the case for most of the class. To sync up:

1.  **Add the original repo as "upstream":**
    ```bash
    git remote add upstream https://github.com/FEWS-217/11_github-collaboration-project-pet-shop.git
    ```
2.  **Sync your main branch:**
    ```bash
    git checkout main
    git pull upstream main
    ```
3.  **Rebase your feature branch:**
    ```bash
    git checkout [your-branch-name]
    git rebase main
    ```
    *If there are conflicts in `app.js`, resolve them manually, then run `git add app.js` and `git rebase --continue`.*

---
**Don't hesitate to ask questions and Happy Coding!**
