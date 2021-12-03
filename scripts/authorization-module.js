function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function setSession(id) {
    $.cookie('session', id, { expires: 7, path: '/' });
}

function validateSession() {
    if($.cookie('session') == sesId)
    {
        return true;
    }
    return false;
}

var sesId = "1231232";

$(document).ready(function(){
    //setSession(sesId);
    // действия, которые необходимо выполнить после загрузки документа...
    $("#login-email").change(function() {
        $("#login-email").removeClass("invalid-value");
        $("#login-email").removeClass("valid-value");
        
        if(validateEmail($("#login-email").val()))
        {
            $("#login-email").addClass("valid-value");
        }
        else
        {
            $("#login-email").addClass("invalid-value");
        }

      });

    $("#register-email").change(function() {
        $("#register-email").removeClass("invalid-value");
        $("#register-email").removeClass("valid-value");
        
        if(validateEmail($("#register-email").val()))
        {
            $("#register-email").addClass("valid-value");
        }
        else
        {
            $("#register-email").addClass("invalid-value");
        }

      });



    if(validateSession())
    {
        $("main>h1").remove();
        $("main>.authorization-container").remove();

        $("main").append("<h1>Вы уже авторизованы!</h1>");
    }
});