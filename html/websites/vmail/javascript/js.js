$(() => {

    $('body').on('click', '.sidebar .menu .menu-btn', function(e) {
        $('.sidebar .menu .menu-btn').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
})