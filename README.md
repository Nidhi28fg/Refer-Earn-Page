git add .
<br>
PS C:\Users\teamg\Documents\SuvidhaShare> git commit -m "fix: minor update" <br>
[develop bded196] fix: minor update
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\teamg\Documents\SuvidhaShare> git push origin develop <br>
icon use - https://react-icons.github.io/react-icons/ <be>




updated data --- 
ab latest code pull krlo dev branch se apni local repos me aur code convention follow kro aage ka code likhne me. nhi to merge conflicts aate hai<br>


git remote show origin # जाँचें कि क्या dev रिमोट पर है<br>
git fetch origin      # रिमोट ब्रांचेस को अपडेट करें<br>
git checkout -t origin/dev # लोकल dev ब्रांच बनाएँ और उसे ट्रैक करें (या git checkout dev)<br>
git pull origin dev  # नवीनतम परिवर्तन प्राप्त करें<br>


Keeping a forked GitHub repository up-to-date with the original (upstream) repository is a common task for developers. Here's a breakdown of how to do it, covering both command-line and GitHub web interface methods:

**Understanding the Concepts**

* **Upstream:** This refers to the original repository that you forked from (in this case, MANISHMOTGHARE/SuvidhaShare).
* **Origin:** This refers to your forked repository (Nidhi28fg/SuvidhaShare).
* **Fetching:** This process retrieves the latest changes from the upstream repository without merging them into your local branch.
* **Merging/Rebasing:** This process integrates the fetched upstream changes into your local branch.

**Methods**

**1. Using the Command Line (Git)**

This is the most flexible and powerful method.

* **Step 1: Add the Upstream Remote:**
    * If you haven't already, you need to add the original repository as a remote named "upstream." Open your terminal and navigate to your local copy of the forked repository. Then, run:
        * `git remote add upstream https://github.com/MANISHMOTGHARE/SuvidhaShare.git`
    * To verify that the remote has been added, you can run:
        * `git remote -v`
* **Step 2: Fetch Changes from Upstream:**
    * Fetch the latest changes from the upstream repository:
        * `git fetch upstream`
* **Step 3: Merge or Rebase Changes:**
    * Now, you can merge or rebase the changes into your local branch.
        * **Merge:** This creates a new merge commit, preserving the history.
            * `git checkout main` (or the branch you want to update)
            * `git merge upstream/main`
        * **Rebase:** This rewrites the commit history to make it cleaner. It's often preferred for a linear history.
            * `git checkout main`
            * `git rebase upstream/main`
    * **Step 4: Push Changes to Your Fork:**
    * Push the updated local branch to your forked repository on GitHub:
        * `git push origin main`

**2. Using the GitHub Web Interface**

GitHub provides a simpler way to sync forks:

* **Step 1:** Navigate to your forked repository on GitHub (Nidhi28fg/SuvidhaShare).
* **Step 2:** Look for the "Sync fork" button. It's usually located above the file list.
* **Step 3:** Click the "Sync fork" dropdown menu, and then click "Update branch."
* GitHub will attempt to merge the upstream changes into your fork. If there are conflicts, you'll be prompted to resolve them.

**Important Notes:**

* **Merge Conflicts:** Be prepared to resolve merge conflicts, which occur when changes in the upstream repository conflict with your own changes.
* It is always a good idea to work within branches, and then merge those branches into the main branch. This creates a cleaner work flow.
* Using the command line git tools gives you the most control over the updating process.

I hope this helps!

