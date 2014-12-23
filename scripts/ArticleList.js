//添加首页文章
var ArticleListInit = function() {
    var ArticleList = AV.Object.extend("ArticleList", {
      like: function(callback) {
        var this_ = this;
        var currentUser = AV.User.current();
        if(!currentUser) {
          callback.error && callback.error('nologin');
          return;
        }
        var UserLikeArticleList = AV.Object.extend("UserLikeArticleList");
        var query = new AV.Query(UserLikeArticleList);
        query.equalTo('articleid', this_.id);
        query.find({
          success: function(res) {
            var num = res.length; //已点赞数
            var find = -1;
            for(var i = 0; i < res.length; ++i) {
              if(currentUser.id == res[i].attributes.userid) {
                find = i;
                break;
              }
            }
            if(find != -1) { //找到点过赞
              res[find].destroy({ //取消点赞
                success: function(res) {
                  this_.set('like', num - 1);
                  this_.save(null, {
                    success: function(res) {
                      callback.success && callback.success(res);
                    },
                    error: function(res) {
                      callback.error && callback.error(res);
                    }
                  });
                },
                error: function(res) {
                  callback.error && callback.error(res);
                }
              });
            } else { //未点过赞
              var userLikeArticleList = new UserLikeArticleList();
              userLikeArticleList.set('articleid', this_.id);
              userLikeArticleList.set('userid', currentUser.id);
              userLikeArticleList.save(null, { //点赞
                success: function(res) {
                  this_.set('like', num + 1);
                  this_.save(null, {
                    success: function(res) {
                      callback.success && callback.success(res);
                    },
                    error: function(res) {
                      callback.error && callback.error(res);
                    }
                  });
                },
                error: function(res) {
                  callback.error && callback.error(res);
                }
              });
            }

          },
          error: function(res) {
            callback.error && callback.error(res);
          }
        });
      }
    });
    return ArticleList;
};
