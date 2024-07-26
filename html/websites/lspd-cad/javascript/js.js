$(() => {

    $('body').on('click', '#lspd-cad .topbar .nav-link.top-active', function(e) {
        $('#lspd-cad .topbar .nav-link.top-active').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('body').on('click', '#managment .nav-link', function(e) {
        $('#managment .nav-link').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
})