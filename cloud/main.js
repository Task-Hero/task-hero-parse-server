Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("sendPushToUser", function(request, response) {

  var user = request.params.user;
  var data = request.params.data;

  var recipientUser = new Parse.User();
  recipientUser.id = user;

  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("user", recipientUser);

  Parse.Push.send({
    where: pushQuery, 
    data: data
  }, { 
  	success: function() {
      console.log("#### PUSH OK");
    }, 
    error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
    }, 
    useMasterKey: true
  });

  response.success('success');

});