// ============= [ DOCUMENT READY ] ============= //

$('body').on('click', '#vl_browser .topbar-cards .main-card', function(e) {
    $('#vl_browser .topbar-cards .main-card').removeClass('active');
    $(e.currentTarget).addClass('active');
});


let currentBrowserPage = ''
let pages = [
    {
        page: 'lspd-cad',
        css: [ 'css/style.css' ],
        images: [ 'images/background.jpg', 'images/logo.png', 'images/nopic.jpg' ],
        javascript: [ 'javascript/js.js' ],
        subpages: [
          
        ],
        pageData: {
          url: 'https://cad.lspd.com',
          indexFile: 'index.html',
          cardName: 'LSPD CAD'
        }
    },
    {
      page: 'businesscenter',
      css: [ 'css/style.css' ],
      images: [ 'images/background.jpg', 'images/logo.png' ],
      javascript: [ 'javascript/js.js' ],
      subpages: [
        'subpages/businesses.html',
        'subpages/home.html',
        'subpages/joboffers.html'
      ],
      pageData: {
        url: 'https://business-center.com',
        indexFile: 'index.html',
        cardName: 'BusinessCenter - Centrum biznesowe'
      }
    },
    {
      page: 'businesscenter-panel',
      css: [ 'css/style.css' ],
      images: [ 'images/background.jpg', 'images/logo.png' ],
      javascript: [ 'javascript/js.js' ],
      subpages: [
        'subpages/businesses.html',
        'subpages/home.html',
        'subpages/joboffers.html'
      ],
      pageData: {
        url: 'https://nazwagrupy.business-center.com',
        indexFile: 'index.html',
        cardName: 'BusinessCenter - Centrum biznesowe'
      }
    },
    {
      page: 'lscitypanel',
      css: [ 'css/style.css' ],
      images: [ 'images/logo.png' ],
      javascript: [ 'javascript/js.js' ],
      subpages: [ 'subpages/citizen-base.html', 'subpages/dashboard.html' ],
      pageData: {
        url: 'https://panel.lscity.gov',
        indexFile: 'index.html',
        cardName: 'Miasto Los Santos'
      }
    },
    {
      page: 'vbrowser',
      css: [ 'css/style.css' ],
      images: [ 'images/browserbg.jpg' ],
      javascript: [ 'javascript/js.js' ],
      subpages: [],
      pageData: {
        url: 'Szukaj adresu',
        indexFile: 'index.html',
        cardName: 'virtualBrowser'
      }
    },
    {
      page: 'virtualbanking',
      css: [ 'css/style.css' ],
      images: [
        'images/debit.png',
        'images/vbLogo.png',
        'images/vbSygnet.png',
        'images/vlBank-card.png',
        'images/walet.png'
      ],
      javascript: [ 'javascript/js.js' ],
      subpages: [ 'subpages/dashboard.html', 'subpages/settings.html' ],
      pageData: {
        url: 'https://virtualbanking.com',
        indexFile: 'index.html',
        cardName: 'virtualBanking - Bank zmieniającego się świata'
      }
    },
    {
      page: 'vmail',
      css: [ 'css/style.css' ],
      images: [ 'images/vMail.png' ],
      javascript: [ 'javascript/js.js' ],
      subpages: [
        'subpages/dashboard.html',
        'subpages/deleted.html',
        'subpages/drafts.html',
        'subpages/email.html',
        'subpages/firstpage.html',
        'subpages/important.html',
        'subpages/received.html',
        'subpages/sent.html'
      ],
      pageData: {
        url: 'https://vmail.com',
        indexFile: 'index.html',
        cardName: 'vMail - Poczta internetowa'
      }
    }
  ]

$(function() {    

    pages.forEach((page) => {
        $('#address-search').append(`<li data-browser-page="${page.page}"><a class="dropdown-item">${page.pageData.url}</a></li>`)
    });

    $.fn.loadPage = async function(page) {
        let dir = '/html/websites/' + page + '/';
        const pagesData = pages.find((p) => p.page === page);

        if (pagesData) {
            $(this).hide().load(dir + pagesData.pageData.indexFile, () => {
                $(this).find('img[data-image]').each(function() {
                    let src = $(this).data('image');
                    if (src) {
                        pagesData.images.find((image) => {
                            if (image.includes(src)) {
                                $(this).attr('src', dir + image);
                            }
                        });
                    }
                });
            });

            $('.todeleteinnextpage').remove();
            $('#dropdown-searchbar').text(pagesData.pageData.url);
            $('#card-name').text(pagesData.pageData.cardName);

            $('#page-icon').addClass('d-none');
            $('#loading-page').removeClass('d-none');

            if (pagesData.css) {
                pagesData.css.forEach((css) => {
                    if (!$('head').find('link[href="' + dir + css + '"]').length) {
                        $('head').append('<link rel="stylesheet" class="todeleteinnextpage" href="' + dir + css + '">');
                    }
                });
            }

            if (pagesData.javascript) {
                pagesData.javascript.forEach((js) => {
                    if (!$('head').find('script[src="' + dir + js + '"]').length) {
                        $('head').append('<script class="todeleteinnextpage" src="' + dir + js + '"></script>');
                    }
                });
            }
    
                currentBrowserPage = page;
                setTimeout(() => {
                    $('#page-icon').removeClass('d-none')
                    $('#loading-page').addClass('d-none')
                    $(this).fadeIn(500);
                }, 200);

        } else {
            console.log('[ERROR] Page not found! (' + page + ')' + '\n' + 'Please check if the page exists in the html/websites folder!')
        }
    }

    $.fn.loadSubPage = function(subpage, withAnim) {
        let dir = '/html/websites/' + currentBrowserPage + '/';
        const pagesData = pages.find((p) => p.page === currentBrowserPage);

        if (withAnim) {
            
            $(this).hide();
            $('#page-icon').addClass('d-none');
            $('#loading-page').removeClass('d-none');

            $(this).load(dir + 'subpages/' + (subpage.endsWith('.html') ? subpage : subpage + '.html'), () => {
                $(this).find('img[data-image]').each(function() {
                    let src = $(this).data('image');
                    if (src) {
                        pagesData.images.find((image) => {
                            if (image.includes(src)) {
                                $(this).attr('src', dir + image);
                            }
                        });
                    }
                });
    
                setTimeout(() => {
                    $('#page-icon').removeClass('d-none')
                    $('#loading-page').addClass('d-none')
                    $(this).fadeIn(500);
                }, 200);
            });
        } else {
            $(this).load(dir + 'subpages/' + (subpage.endsWith('.html') ? subpage : subpage + '.html'), () => {
                $(this).find('img[data-image]').each(function() {
                    let src = $(this).data('image');
                    if (src) {
                        pagesData.images.find((image) => {
                            if (image.includes(src)) {
                                $(this).attr('src', dir + image);
                            }
                        });
                    }
                });
            });
        }
    }

    $('body').on('click', '[data-browser-page]', function() {
        let page = $(this).data('browser-page');
        $('#browser-page').loadPage(page);
    });

    $('body').on('click', '[data-browser-subpage]', function() {
        let subpage = $(this).data('browser-subpage');
        let target = $(this).data('browser-subpage-target');
        let skipAnim = $(this).data('browser-subpage-skipAnim')
        $(target).loadSubPage(subpage, skipAnim && false || true);
    });





    // ---------- [ LUA EVENT LISTENER ] ---------- //
    /*window.addEventListener('message', function(event) {

    });*/

});

function setUrl(link) {
    const pagesData = pages.find((p) => p.page === currentBrowserPage);
    $('#dropdown-searchbar').text(`${pagesData.pageData.url}/${link}`);
};
// ============================================== //

let loadedScripts = [];