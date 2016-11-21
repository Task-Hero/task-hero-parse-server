Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("sendPushToUser", function(request, response) {

  var params = request.params;
  var someKey = params.someKey;
  var data = params.data;

  var recipientUser = new Parse.User();
  recipientUser.id = someKey;

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