function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    if(password.length >= 8)
        return true
    return false
}

function setSession(id) {
    $.cookie('session', id, { expires: 7, path: '/' });
    // alert("asdwr")
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
    // setSession(sesId);
    // действия, которые необходимо выполнить после загрузки документа...
    
});