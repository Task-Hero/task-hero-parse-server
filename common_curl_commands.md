Sending Push Notifications

{code}
curl -X POST -H "X-Parse-Application-Id: task_hero_app" -H "X-Parse-Master-Key: goChargers" -H "Content-Type: application/json" -d '{ "where": { "deviceType": "ios" }, "data": { "alert": "All work and no play makes Jack a dull boy.", "badge": "Increment", "sound": "1" }}' https://salty-plains-70360.herokuapp.com/parse/push
{code}

