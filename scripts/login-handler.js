$(document).ready(function(){
    //setSession(sesId);
    // действия, которые необходимо выполнить после загрузки документа...
    if(validateSession())
    {
        $("main>h1").remove();
        $("main>.authorization-container").remove();

        $("main").append("<h1>Вы уже авторизованы!</h1>");
    }

    $('#register-button').click(function () { 
        var email = $('#register-email').val();
        var password = $('#register-password').val();

        if(validateEmail(email) && validatePassword(password))
        {
            alert("email: " + email + "\npassword: " + password);
        }
        else
        {
            alert("Неподходящий email или пароль!");
        }
    });


    //Валидация почты и пароля на уровне формы
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

    $("#register-password").change(function() {
        $("#register-password").removeClass("invalid-value");
        $("#register-password").removeClass("valid-value");
        
        if(validatePassword($("#register-password").val()))
        {
            $("#register-password").addClass("valid-value");
        }
        else
        {
            $("#register-password").addClass("invalid-value");
        }
      });
});