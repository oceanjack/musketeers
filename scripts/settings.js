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
  for(var i = 0, l = mock.length; i < l; ++i) {
    var ArticleList = AV.Object.extend("ArticleList");
    var articleList = new ArticleList();
    articleList.set("img", mock[i].img);
    articleList.set("title", mock[i].title);
    articleList.set("like", mock[i].like);
    articleList.set("url", mock[i].url);

    articleList.save(null, {
      success: function(articleList) {
      },
      error: function(articleList, error) {
        alert('' + error.description);
      }
    });
  }
}();
