$(() => {

    $('body').on('click', '.sidebar .menu [data-browser-subpage]', function(e) {
        $('.sidebar .menu [data-browser-subpage]').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
})