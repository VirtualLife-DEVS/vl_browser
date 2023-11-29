$(() => {

    $('body').on('click', '.header .topbar .menu .main-btn', function(e) {
        $('.header .topbar .menu .main-btn').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    $('body').on('click', '.management-menu .main-btn', function(e) {
        $('.management-menu .main-btn').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
})