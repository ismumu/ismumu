$(function () {
    $(".post-list").pin({ containerSelector: ".sidebar" })

    var gitment = new Gitment({
        // id: '页面 ID', // 可选。默认为 location.href
        owner: 'ismumu',
        repo: 'ismumu-comments',
        oauth: {
            client_id: '967be3ff5cbadbc11347',
            client_secret: '88dca966f3d89abafe950ff037ef2c7a21538941',
        }
    })
    gitment.render('comments');

})