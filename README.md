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
