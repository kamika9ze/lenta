$(".js-section-history-btn").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').show();
    $(this).parents('.section-history').addClass('active');
    $(this).hide();
});
$(".btn-top-section-history").click(function () {
    $(this).parents('.section-history').find('.section-history-hide-text').hide();
    $(this).parents('.section-history').find('.section-history-btn').show();
    $(this).parents('.section-history').removeClass('active');
});
$('.section-history .section-left > p').append('<span class="points">..</span>');
Ya.share2('#ya-share2', {
    hooks: {
        onshare: function (name) {
            if (name == 'vkontakte') {
            	gtag('event', 'social-vk', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', });            	
            } else if (name == 'facebook') {
            	gtag('event', 'social-fb', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            } else if (name == 'twitter') {
            	gtag('event', 'social-tv', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            } else if (name == 'odnoklassniki') {
            	gtag('event', 'social-ok', { 'event_category': 'external', 'event_action': 'click', 'event_label': 'social', }); 
            }
        }
    }
});