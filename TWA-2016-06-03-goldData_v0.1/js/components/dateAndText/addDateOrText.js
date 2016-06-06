(function(){
  $.fn.addDateOrText = function(){
    var compliled = _.template('<% _.forEach(data,function(input) { %><div><input type=<%- input %> ></div><% }); %>');
    $(this).html(compliled(jsonData));
  }

})();