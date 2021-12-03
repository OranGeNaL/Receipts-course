if (window.jQuery) {
    var verJquery = jQuery.fn.jquery;
    // выведем версию jQuery в консоль
    console.log(verJquery);
  }
else {
    console.log("nothing here");
}

$('.add-receipt').click(function() {
    console.log("aboba")
})

$(document).ready(function(){
    // действия, которые необходимо выполнить после загрузки документа...


    // $(".receipts-list").append('<div class="receipt-card"><p>"РЕЦЕПТ РЕЦЕПТ"</p></div>')
    // $("main").append('хахахаха')

    $('.add-receipt').click(function() {
        // console.log("aboba")
        $(".receipts-list").append('<div class="receipt-card"><p>"РЕЦЕПТ РЕЦЕПТ"</p></div>')
        $("main").append('хахахаха')
    })
});