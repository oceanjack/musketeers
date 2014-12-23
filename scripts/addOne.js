//添加首页文章
var addContentToDataBase = function() {
  var mock = [{
      img: 'imgs/1.png',
      title: '测试下',
      like: 0,
      url: 'more.html'
    }
  ];
  var mockc = {
    content: (
      "<h3>要任性哈</h3>\r\n" + 
      "<span class='time'>2014.12.23</span>\r\n" + 
      "<p>今天是个好天气，那么我该做些什么呢？</p>\r\n" + 
      "<img src='imgs/miao.jpg'/>\r\n" + 
      "<p>没错！就是睡觉，运筹帷幄之中！总有一天走上人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！</p>\r\n" + 
      "<p>然后羽化而登仙了!</p>"
    )
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
