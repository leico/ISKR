$(function(){
  var url = window.location.href;
  url = url.split('/');
  var page = url[url.length - 1].split('.')[0];
  alert(page);
});