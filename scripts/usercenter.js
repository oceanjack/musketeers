var usercenter = function() {
  var currentUser = AV.User.current();
  if(!currentUser) {
    window.location.href = 'index.html';
  }
  var name = currentUser.getUsername();
  var email = currentUser.getEmail();
  var follower = currentUser.followerQuery();
  var followee = currentUser.followeeQuery();

  var tag = 0;
  followee.find({
    success: function(result) {
      followee = result;
      if(followee.length > 0) { 
        findName();
      } else {
        ++tag;
        if(tag >= 2) {
          createNode();
        }
      }
    }
  });
  follower.find({
    success: function(result) {
      follower = result;
      ++tag;
      if(tag >= 2) {
        createNode();
      }
    }
  });

  var findName = function() {
    var query = new AV.Query(AV.User);
    query.equalTo('objectId', followee[0].id);
    query.find({
      success: function(result) {
        followee = result;
        ++tag;
        if(tag >= 2) {
          createNode();
        }
      }
    });
  }

  var createNode = function() {
    var node = $('<div class="info"></div>');
    node.append($('<h3>' + name + '</h3>'));
    node.append($('<div class="infoitem">邮箱：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + email + '</div>'));
    node.append($('<div class="infoitem">邀请人：&nbsp;&nbsp;&nbsp;&nbsp;' + (followee.length > 0 ? followee[0].getUsername() : '无') + '</div>'))
    node.append($('<div class="infoitem">我已邀请：' + follower.length + '人</div>'))
    $('.container').append(node);
  }
}();
