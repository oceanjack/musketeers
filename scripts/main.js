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
  
  user.set("email", email);
  user.set("username", username);
  user.set("password", password);
  //user.set("phone", "415-392-0202");

  user.signUp(null, {
    success: function(user) {
      window.location.reload();
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
//添加首页文章
var addContent = function() {
  var mock = [
    {
      img: 'imgs/1.png',
      title: '重新起航',
      url: '#',
      id: '0'
    },
    {
      img: 'imgs/2.jpg',
      title: '思考那些事',
      url: '#',
      id: '1'
    },
    {
      img: 'imgs/3.jpg',
      title: '点我就有惊喜',
      url: '#',
      id: '2'
    },
    {
      img: 'imgs/4.png',
      title: '再谈谈设计',
      url: '#',
      id: '3'
    },
    {
      img: 'imgs/5.png',
      title: '这里有个不为人之的问题，你猜是啥',
      url: '#',
      id: '4'
    },
    {
      img: 'imgs/6.jpg',
      title: '连接这个世界',
      url: '#'
    }
  ];

  for(var i = 0, l = mock.length; i < l; ++i) {
    var node = $(
      '<a class="item" href="' + mock[i].url + '">' + 
         '<div class="imgs">' +
           '<img src="' + mock[i].img + '">' +
         '</div>' +
         '<p class="title"><span class="heart"></span><span class="num">0</span>' +
           (mock[i].title.length >= 7 ? (mock[i].title.substr(0, 7) + '...') : mock[i].title) +
         '</p>' +
      '</a>'
    );
    $('.container').append(node);
  }
}();
