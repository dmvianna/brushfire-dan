$(function whenDomIsReady() {

    $('.the-list-of-videos .loading').show();

    setTimeout(function afterRetrievingVideos() {
        var videos = [{
            title: 'Zombie incidents',
            src: "https://www.youtube.com/embed/hD5SZ6v2JLQ"
        }, {
            title: 'Forklift incidents',
            src: "https://www.youtube.com/embed/EjOvI0TOx98"
        }, {
            title: 'Truck incidents',
            src: "https://www.youtube.com/embed/v8P_XuzgZac"
        }];

        $('.the-list-of-videos .loading').hide();

        var videosHtml = _.reduce(videos, function (html, video) {
            html += '<li class="video">' +
                ' <h2>' + video.title + '</h2>' +
                ' <iframe width="640" height="390" src="' + video.src +
                '" frameborder="0" allowfullscreen></iframe>' +
                '</li>';
            return html;
        }, '');

        $('.the-list-of-videos ul').replaceWith(videosHtml);

    }, 750);
});
