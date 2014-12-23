//检测登陆
var checkUser = function() {
  var currentUser = AV.User.current();
  var items = $('.container-fluid .navbar-collapse .navbar-right li');
  
  items.eq(0).children('a').eq(0).leanModal({ top: 50, overlay: 0.5});
  items.eq(1).children('a').eq(0).leanModal({ top: 50, overlay: 0.5});
  
  $('.form-reg button').on('click', function() {
    reg();
  });
  $('.form-signin button').on('click', function() {
    login();
  });
  items.eq(3).on('click', function() {
    AV.User.logOut();
    window.location.reload();
  });
  
  if(currentUser) {
    items.eq(2).children('a').text(currentUser.getUsername());
    items.eq(0).addClass('hidden');
    items.eq(1).addClass('hidden');
    items.eq(2).removeClass('hidden');
    items.eq(3).removeClass('hidden');
  } else {
    items.eq(2).addClass('hidden');
    items.eq(3).addClass('hidden');
    items.eq(0).removeClass('hidden');
    items.eq(1).removeClass('hidden');
  }
}();

//注册
var reg = function() {
  var user = new AV.User();
  var email = $('.form-reg input').eq(0).val();
  var username = $('.form-reg input').eq(1).val();
  var password = $('.form-reg input').eq(2).val();
  var passwordConfirm = $('.form-reg input').eq(3).val();
  var teacher = $('.form-reg input').eq(4).val();
  
  var node = $('.form-reg .alert');
  if(email.trim() == '') {
    node.show();
    node.text('请填写邮箱～');
    return;
  }
  if(username.trim() == '') {
    node.show();
    node.text('请填写用户名～');
    return;
  }
  if(password.trim() == '') {
    node.show();
    node.text('请填写密码～');
    return;
  }
  if(password != passwordConfirm) {
    node.show();
    node.text('啊哦，两次密码不一致');
    return;
  }
  var query = new AV.Query(AV.User);
  query.equalTo('username', teacher);
  var empty = (teacher.trim() == '');
  query.find({
    success: function(result) {
      if(result.length <= 0 && !empty) {
        node.show();
        node.text('无法正常查找到推荐人');
        return;
      }
      user.set("email", email);
      user.set("username", username);
      user.set("password", password);

      user.signUp(null, {
        success: function(user) {
          if(empty) {
            window.location.reload();
            return;
          }
          user.follow(result[0].id, {
            success: function(res) {
              window.location.reload();
            },
            error: function(res) {
              window.location.reload();
            }
          })
        },
        error: function(user, error) {
          node.show();
          switch(error.code) {
            case 202:
              node.text('该用户名已存在');
              break;
            case 203:
              node.text('此电子邮箱已经被占用');
              break;
            default:
              node.text(error.code + ":" + error.message);
              break;
          };
        }
      });    
    },
    error: function(result) {
      node.show();
      node.text('无法正常查找到推荐人');
    }
  });

};

//登陆
var login = function() {
  var username = $('.form-signin input').eq(0).val();
  var password = $('.form-signin input').eq(1).val();
  
  var node = $('.form-signin .alert');
  if(username.trim() == '') {
    node.show();
    node.text('请填写用户名～');
    return;
  }
  if(password.trim() == '') {
    node.show();
    node.text('请填写密码～');
    return;
  }
  
  AV.User.logIn(username, password, {
    success: function(user) {
      window.location.reload();
    },
    error: function(user, error) {
      node.show();
      node.text('用户不存在或密码错误');
    }
  });
};

//搜索
var search = function() {
  $('.navbar-collapse button').on('click', function() {
    $('.container .item').hide();
    $('.container .item:contains(' + $('.navbar-collapse .form-group input').val() + ')').show();
  });
}();
