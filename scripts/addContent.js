//添加首页文章
var addContent = function() {
  var ArticleList = ArticleListInit();
  var query = new AV.Query(ArticleList);
  query.find({
    success: function(mock) {
      for(var i = 0, l = mock.length; i < l; ++i) {
        var node = $(
          '<div class="item">' + 
          '<a class="imgs" href="' + mock[i].attributes.url + '?id=' + mock[i].id + '">' +
          '<img src="' + mock[i].attributes.img + '">' +
          '</a>' +
          '<p class="title"><span class="heart"></span><span class="num">' + mock[i].attributes.like + '</span>' +
          (mock[i].attributes.title.length >= 7 ? (mock[i].attributes.title.substr(0, 7) + '...') : mock[i].attributes.title) +
          '</p>' +
          '</div>'
        );
        node.children('.title').children('.heart').on('click', function(i, node) {
          return function() {
            mock[i].like({
              success: function(res) {
                node.children('.title').children('.num').text(res.attributes.like);
              }
            });
          }}(i, node)
        );
        $('.container').append(node);
      }
    },
    error: function(object, error) {
    }
  });

}();
