# Task Hero App Parse server
*(keep internal)*

App is running at https://salty-plains-70360.herokuapp.com/. Check index.js for client credentials.

Sample commands:

curl -X POST \
  -H "X-Parse-Application-Id: task_hero_app" \
  -H "X-Parse-Master-Key: goChargers" \
  -H "Content-Type: application/json" \
  -d '{"score":1337,"playerName":"Aki and Como","cheatMode":true}' \
  https://salty-plains-70360.herokuapp.com/parse/classes/GameScore

curl -X GET \
  -H "X-Parse-Application-Id: task_hero_app" \
  -H "X-Parse-Master-Key: goChargers" \
  https://salty-plains-70360.herokuapp.com/parse/classes/GameScore

*Access the dashboard via:*

npm install -g parse-dashboard

parse-dashboard --appId task_hero_app --masterKey goChargers --serverURL "https://salty-plains-70360.herokuapp.com/parse"