$(".section-history-btn").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').show();
    $(this).hide();
});
$(".btn-top-section-history").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').hide();
    $(this).parents('.section-history').find('.section-history-btn').show();
});