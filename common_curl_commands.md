Adding users:

{code}
curl -X POST -H "X-Parse-Application-Id: task_hero_app" -H "X-Parse-Master-Key: goChargers" -H "Content-Type: application/json" -d '{"name":"name","team":"CodePath","email":"email@email.com","password_hash":"password"}' https://salty-plains-70360.herokuapp.com/parse/classes/User
{code}

