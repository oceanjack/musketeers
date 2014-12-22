//显示文章更多内容
var showMore = function() {
  var mock = {
    content: "<h3>要任性</h3>\r\r<span class='time'>2014.12.23</span>\r\n<p>今天是个好天气，那么我该做些什么呢？</p>\r\n<img src='imgs/miao.jpg'/>\r\n<p>没错！就是睡觉，运筹帷幄之中！总有一天走上人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！人生巅峰！</p>\r\n<p>然后羽化而登仙了!</p>"
  };
  var content = [];
  var index = mock.content.indexOf('\n');
  while(index != -1) {
    content.push(mock.content.substr(0, index));
    mock.content = mock.content.substr(index + 1, mock.content.length);
    index = mock.content.indexOf('\n');
  }
  if(mock.content.trim()) {
    content.push(mock.content);
  }
  var article = $('<div class="article"></div>');
  for(var i = 0, l = content.length; i < l; ++i) {
    article.append($(content[i]));
  }
  $('.container').append(article);
}();
