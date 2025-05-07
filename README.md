#reactNotes
https://usehooks.com/


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


update data =----

# अपनी स्थानीय रिपॉजिटरी में `feature/allfoodlists` ब्रांच पर स्विच करें
git checkout feature/allfoodlists

# `dev` ब्रांच को रिमोट रिपॉजिटरी से फेच करें
git fetch origin dev

# `dev` ब्रांच से `feature/allfoodlists` ब्रांच में कोड को मर्ज करें
git merge origin/dev

# किसी भी संघर्ष को हल करें (यदि कोई हो)

# अपनी स्थानीय रिपॉजिटरी में परिवर्तनों को पुश करें
git push origin feature/allfoodlists


You can achieve this merge in a few ways, depending on your preference and familiarity with Git. Here are the methods:

**Method 1: Using the GitHub Website (Pull Request)**

This is generally the easiest method if you're comfortable with the GitHub interface.

1.  **Go to the `feature/setUpBackendofallfoodpage` branch:** Navigate to your repository (`https://github.com/Nidhi28fg/SuvidhaShare`) on GitHub and switch to the `feature/setUpBackendofallfoodpage` branch.
2.  **Create a Pull Request:**
    * You should see a banner at the top of the page suggesting you compare and pull request. If not, go to the "Pull requests" tab and click "New pull request".
    * **Base branch:** Select `MANISHMOTGHARE/SuvidhaShare` and the `dev` branch.
    * **Compare branch:** Select `Nidhi28fg/SuvidhaShare` and the `feature/setUpBackendofallfoodpage` branch.
3.  **Review Changes:** GitHub will show you the differences between the two branches. Review these to ensure it's the merge you intend.
4.  **Create the Pull Request:** Add a title and an optional description for your pull request, then click "Create pull request".
5.  **Merge the Pull Request:**
    * On the pull request page, click the green "Merge pull request" button.
    * Confirm the merge by clicking "Confirm merge".
6.  **(Optional) Delete the Branch:** Once the merge is complete, you can choose to delete the `feature/setUpBackendofallfoodpage` branch if you no longer need it.

**Method 2: Using Git Command Line (if you have local clones of both repositories)**

This method is more powerful but requires you to have Git installed and configured.

1.  **Clone both repositories (if you haven't already):**
    ```bash
    git clone https://github.com/Nidhi28fg/SuvidhaShare.git nidhi_repo
    git clone https://github.com/MANISHMOTGHARE/SuvidhaShare.git manish_repo
    ```
2.  **Navigate to your local clone of Nidhi28fg's repository:**
    ```bash
    cd nidhi_repo
    ```
3.  **Checkout the `feature/setUpBackendofallfoodpage` branch:**
    ```bash
    git checkout feature/setUpBackendofallfoodpage
    ```
4.  **Add MANISHMOTGHARE's repository as a remote (if you haven't already):**
    ```bash
    git remote add manish https://github.com/MANISHMOTGHARE/SuvidhaShare.git
    ```
5.  **Fetch the `dev` branch from the remote:**
    ```bash
    git fetch manish dev
    ```
6.  **Merge the `dev` branch into your current branch:**
    ```bash
    git merge manish/dev
    ```
7.  **Handle any merge conflicts:** If there are conflicting changes between the two branches, Git will notify you. You'll need to open the affected files in a text editor, manually resolve the conflicts, and then stage and commit the changes:
    ```bash
    git add <conflicted_file(s)>
    git commit -m "Resolve merge conflicts with manish/dev"
    ```
8.  **Push the merged changes to your remote repository:**
    ```bash
    git push origin feature/setUpBackendofallfoodpage
    ```
    (Assuming `origin` is the name of your remote repository)
9.  **Create a Pull Request (on GitHub):** Now, go to the `Nidhi28fg/SuvidhaShare` repository on GitHub. You should see that your `feature/setUpBackendofallfoodpage` branch has new commits. You can then create a pull request to merge this branch into the `dev` branch of `MANISHMOTGHARE/SuvidhaShare` (if you have the necessary permissions in that repository) or your own `dev` branch.

**Which method should you choose?**

* If you primarily work through the GitHub website and have push access to both repositories, the **Pull Request method** is simpler.
* If you prefer using the command line for Git operations or need more control over the merge process (especially conflict resolution), the **Git Command Line method** is more suitable.

Make sure you have the necessary permissions to push changes to both repositories if you intend to merge directly into `MANISHMOTGHARE/SuvidhaShare`. If you don't, you'll typically create a pull request from your repository to the target repository.
