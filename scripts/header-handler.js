$(document).ready(function(){
    if(validateSession())
    {
        $("#profile-link").attr("href", "/pages/profile.html");
        $(".profile-name").html("авторизованный пользователь");
    }
    else
    { 
        $(".profile-name").html("неавторизованный пользователь");
    }
});