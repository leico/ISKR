$(function(){
  
  var page = ((function(){
               var url = window.location.href;
               url = url.split('/');
               return url[url.length - 1].split('.')[0];
               })());
  
  var data;
  
  $.getJSON('./' + page + '.json', function(json){
            var html = $('<ul>');
            
            Object.keys(json)
            .forEach(function(k){
                     var type    = $('<li>').append(k);
                     
                     var portals = $('<ul>');
                     
                     Object.keys(json[k])
                     .forEach(function(l){
                              var place = $('<li>');
                              
                              var portal = $('<a>').attr('href', 'http://www.google.com/maps?q=' + json[k][l].latlng);
                              portal.text(json[k][l].name);
                              place.append(portal);
                              portals.append(place);
                              });
                     
                     type.append(portals);
                     type.appendTo(html);
                     
                     });
            
            html.appendTo('body');
            
            });
});