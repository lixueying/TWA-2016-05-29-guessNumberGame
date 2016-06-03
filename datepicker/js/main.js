//date-picer.js


//main.js
(function() {
    var date_picker = $("#cal").my_date_picker();

    $(".submit").click(function(){
        var input = $(".input1");
        var msg = $("#msg1");
        date_picker.validate_handler(input, msg);
    });

    $(".submit").click(function(){
        var input = $(".input2");
        var msg = $("#msg2");
        date_picker.validate_handler(input, msg);
    });
})();