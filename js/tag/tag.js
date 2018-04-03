$(function () {

    $(".post-list").pin({ containerSelector: ".sidebar" })


    var gitment = new Gitment({
        id: location.pathname,
        owner: 'ismumu',
        repo: 'ismumu-comments',
        oauth: {
            client_id: '967be3ff5cbadbc11347',
            client_secret: '88dca966f3d89abafe950ff037ef2c7a21538941',
        }
    })
    gitment.render('comments');


    // 获取浏览器参数
    var getUrlParam = function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return r[2];
        return null;
    }


    let tag = getUrlParam('tag');

    $.each(tagData[tag], function (i, obj) {
        $('.tag-list ul').append(
            '<li>' +
                '<h2 class="tag-title"><a class="J-tag-title" href="#" data-url="'+ obj.url +'">'+ obj.title +'</a></h2>' +
            '</li>'
        )
    })

    $('.J-tag-title').click(function (e) {
        
        e.preventDefault()

        var _url = $(this).attr('data-url');

        $.each(tagData[tag], function (i, obj) {
            if ( _url == obj.url ) {
                $('.J-tag-h1').text(obj.title);
                $('.J-tag-content').html(obj.content);
            }
        })
    }).eq(0).trigger('click');
    
    $('.navbar-nav li').each(function (i, obj) {
        var _tag = $(this).find('a').text();
        if ( _tag == tag ) {
            $(this).addClass('active');
        }
    })


})