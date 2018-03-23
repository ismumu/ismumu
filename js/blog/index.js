$(function () {
    $(".post-list").pin({ containerSelector: ".sidebar" })

    var gitment = new Gitment({
        id: location.pathname.slice(12),
        owner: 'ismumu',
        repo: 'ismumu-comments',
        oauth: {
            client_id: '967be3ff5cbadbc11347',
            client_secret: '88dca966f3d89abafe950ff037ef2c7a21538941',
        }
    })
    gitment.render('comments');

})