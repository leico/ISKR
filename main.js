$(function(){
  
  var page = ((function(){
               var url = window.location.href;
               url = url.split('/');
               return url[url.length - 1].split('.')[0];
               })());
  
  var data;
  
  $.getJSON('./' + page + '.json', function(json){
            data = json;
            
            });
  
});