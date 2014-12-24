//添加首页文章
var addContentToDataBase = function() {
  var img, title, content;
  $('.container .addOne button').on('click', function() {
    img = $('.container .addOne input').eq(0).val();
    title = $('.container .addOne input').eq(1).val();
    content = $('.container .addOne textarea').val();
    if(img.trim() == '') {
      img = 'imgs/1.png';
    }
    if(title.trim() == '') {
      title = '无题';
    }
    if(content.trim() == '') {
      alert('请输入文章HTML');
      return;
    }
    add();
  });
  
  var add = function() {
    var ArticleList = AV.Object.extend("ArticleList");
    var articleList = new ArticleList();
    articleList.set("img", img);
    articleList.set("title", title);
    articleList.set("like", 0);
    articleList.set("url", 'more.html');
    articleList.set("detail", content);

    articleList.save(null, {
      success: function(articleList) {
        window.location.href = 'more.html?id=' + articleList.id;
      },
      error: function(articleList, error) {
        alert('' + error.description);
      }
    });
  }
}();
