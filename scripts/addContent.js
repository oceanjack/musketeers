//添加首页文章
var addContent = function() {
  var mock = [
    {
      img: 'imgs/1.png',
      title: '重新起航',
      url: 'more.html',
      id: '0'
    },
    {
      img: 'imgs/2.jpg',
      title: '思考那些事',
      url: 'more.html',
      id: '1'
    },
    {
      img: 'imgs/3.jpg',
      title: '点我就有惊喜',
      url: 'more.html',
      id: '2'
    },
    {
      img: 'imgs/4.png',
      title: '再谈谈设计',
      url: 'more.html',
      id: '3'
    },
    {
      img: 'imgs/5.png',
      title: '这里有个不为人之的问题，你猜是啥',
      url: 'more.html',
      id: '4'
    },
    {
      img: 'imgs/6.jpg',
      title: '连接这个世界',
      url: 'more.html',
      id: '5'
    }
  ];

  for(var i = 0, l = mock.length; i < l; ++i) {
    var node = $(
      '<div class="item">' + 
         '<a class="imgs" href="' + mock[i].url + '?id=' + mock[i].id + '">' +
           '<img src="' + mock[i].img + '">' +
         '</a>' +
         '<p class="title"><span class="heart"></span><span class="num">0</span>' +
           (mock[i].title.length >= 7 ? (mock[i].title.substr(0, 7) + '...') : mock[i].title) +
         '</p>' +
      '</div>'
    );
    $('.container').append(node);
  }
}();
