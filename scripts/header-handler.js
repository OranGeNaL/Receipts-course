$(document).ready(function(){
    $('.logo').click(function () {
        document.location.href = "/index.html";
    });
    
    changeHeaderContent();

});

async function changeHeaderContent() {
    if(await validateSession())
    {
        $("#profile-link").attr("href", "/pages/profile.html");
        $(".profile-name").html("авторизованный пользователь");
        $('#logout-button').attr('href', "");
        $('#logout-button').html('выйти');

        $('#logout-button').click(function() {
            setSession("1231231");
        })

        $('#add-new-button').click(function () { 
            document.location.href = "/pages/add-receipt.html";
        });

        $('#add-new-button').css("display", "flex");
    }
    else
    { 
        $(".profile-name").html("неавторизованный пользователь");
        $('#logout-button').html('войти');
        $('#logout-button').attr('href', "/pages/login.html");
    }
}