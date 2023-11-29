$(() => {

    $('body').on('click', '.header .topbar .menu .main-btn', function(e) {
        $('.header .topbar .menu .main-btn').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
})