
$(".gallery-box a").click(function (event) {
    pop_img = $(this).attr('href');
    $("body").append('<div class="pop_img_wrap"><div class="pop_img"><img src="' + pop_img + '"></div></div>')
    $(".pop_img_wrap").addClass('active');
    $(".pop_img_wrap").click(function (event) {
        $(".pop_img_wrap").addClass('dactive');
        setTimeout(function () {
            $(".pop_img_wrap").remove()
        }, 300)
    });
    $(".pop_img").click(function (event) {
        return false
    });
    return false

});