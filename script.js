$(function(){
  // 親要素を取得
  $("#parent_target").parent().css("background-color","red");
  //子孫要素を取得
  $("#find").find("#find_target").css("background-color","blue");
  // 兄弟要素を取得
  $("#siblings_target").siblings().css("background-color","green");
  // 次の兄弟要素を取得
  $("#next_target").next().css("background-color","yellow");
});