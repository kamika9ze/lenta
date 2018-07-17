$(".js-section-history-btn").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').show();
    $(this).parents('.section-history').addClass('active');
    $(this).hide();
    $("#nav-sber").scrollspy({ offset: -400 });
});
$(".btn-top-section-history").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').hide();
    $(this).parents('.section-history').find('.section-history-btn').show();
    $(this).parents('.section-history').removeClass('active');
    $("#nav-sber").scrollspy({ offset: -400 });
});
// $('.section-history').on('scrollSpy:enter', function() {
//     console.log('enter:', $(this).attr('id'));
//     $('ul li.'+$(this).attr('id')).addClass('active');
// });

$("#nav-sber").scrollspy({ offset: -400 });
Ya.share2('#ya-share2', {
    hooks: {
        onshare: function (name) {
            if (name == 'vkontakte') {
            	gtag('event', 'share vk', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', });            	
            } else if (name == 'facebook') {
            	gtag('event', 'share fb', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            } else if (name == 'twitter') {
            	gtag('event', 'share tw', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            } else if (name == 'odnoklassniki') {
            	gtag('event', 'share ok', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            } 
        }
    }
});