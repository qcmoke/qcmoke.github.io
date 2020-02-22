$(function() {
  link = {
    init: function() {
      const that = this;
      /*加载 linklist.json 文件路径*/
      $.getJSON("/static/links-falls/linklist.json", function(data) {
        that.render(data);
      });
    },
    render: function(data) {
      let html,
        nickname,
        avatar,
        site,
        li = "";
      for (let i = 0; i < data.length; i++) {
        nickname = data[i].nickname;
        avatar = data[i].avatar;
        site = data[i].site;
        // 将数据拼接成html
        li +=
          '<div class="card">' 
              +'<a href="' +site +'" target="_blank">' +'<div class="thumb" style="background: url( ' + avatar +');">' +"</div>" + "</a>" 
              +'<div class="card-header">' +'<span class="card-site-nickname"><a href="' +site +'" target="_blank">' +nickname +"</a></span>" +"</div>" +
          "</div>";
      }
      $(".link-navigation").append(li);
    },
  };
  link.init();
});
