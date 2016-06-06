$.fn.my_date_picker = function(){
    this.datepicker();
    return {
        validate_handler: validate_handler
    }
    
};

var validate_handler = function (input,msg) {
    if (validate(input.val())) {
        warn.hiddenWarn(input,msg);
    }
    else {
        warn.showWarn(input,msg);
    }
};

var data_picker_handler = function () {
    warn.hiddenWarn(input);
};

function init_validation (input) {
    input.bind("focus", data_picker_handler)
}