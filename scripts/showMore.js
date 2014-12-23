//显示文章更多内容
var showMore = function() {
  var id = window.location.href.split('?')[1].substr(3);
  var ArticleList = ArticleListInit();
  var query = new AV.Query(ArticleList);
  query.get(id, {
    success: function(mock) {
      show(mock.attributes.detail);
    },
    error: function(res) {
      window.location.href = "index.html";
    }
  });

  var show = function(mock) {
    var content = [];
    var index = mock.indexOf('\n');
    while(index != -1) {
      content.push(mock.substr(0, index));
      mock = mock.substr(index + 1, mock.length);
      index = mock.indexOf('\n');
    }
    if(mock.trim()) {
      content.push(mock);
    }
    var article = $('<div class="article"></div>');
    for(var i = 0, l = content.length; i < l; ++i) {
      article.append($(content[i]));
    }
    $('.container').append(article);
  }
}();
