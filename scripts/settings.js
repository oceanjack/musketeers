//添加首页文章
var addContentToDataBase = function() {
  var mock = [
  {
    img: 'imgs/1.png',
    title: '重新起航',
    like: 0,
    url: 'more.html'
  },
  {
    img: 'imgs/2.jpg',
    title: '思考那些事',
    like: 0,
    url: 'more.html'
  },
  {
    img: 'imgs/3.jpg',
    title: '点我就有惊喜',
    like: 0,
    url: 'more.html'
  },
  {
    img: 'imgs/4.png',
    title: '再谈谈设计',
    like: 0,
    url: 'more.html'
  },
  {
    img: 'imgs/5.png',
    title: '这里有个不为人之的问题，你猜是啥',
    like: 0,
    url: 'more.html'
  },
  {
    img: 'imgs/6.jpg',
    title: '连接这个世界',
    like: 0,
    url: 'more.html'
  }
  ];
  var mockc = {
    content: "<h3>要任性</h3>\r\n<span class='time'>2014.12.23</span>\r\n<p>今天是个好天气，那么我该做些什么呢？</p>\r\n<img src='imgs/miao.jpg'/>\r\n<p>没错！就是睡觉，运筹帷幄之中！总有一天走上人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！</p>\r\n<p>然后羽化而登仙了!</p>"
  };


  for(var i = 0, l = mock.length; i < l; ++i) {
    var ArticleList = AV.Object.extend("ArticleList");
    var articleList = new ArticleList();
    articleList.set("img", mock[i].img);
    articleList.set("title", mock[i].title);
    articleList.set("like", mock[i].like);
    articleList.set("url", mock[i].url);
    articleList.set("detail", mockc.content);

    articleList.save(null, {
      success: function(articleList) {
      },
      error: function(articleList, error) {
        alert('' + error.description);
      }
    });
  }
}();
