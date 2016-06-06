(function() {

    var date_picker = $("#cal").my_date_picker();

    $("#dialog").dialog({
          autoOpen: false,
        });
    $("#add").click(function(){
      $("#dialog").dialog("open");
    });

    $("#submit").click(function(){
        $("input:checked").each(function(){
            jsonData.data.push($(this).val());
        });

        $(this).parent().dialog("close");

        $("#show").addDateOrText();
    });

})();
