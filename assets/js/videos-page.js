$(function whenDomIsReady() {
    $('.the-submit-video-form').submit(function(e) {
        e.preventDefault();

        var newVideo = {
            title: $('.the-submit-video-form input[name="title"]').val(),
            src: $('.the-submit-video-form input[name="src"]').val()
        };

        $('.the-submit-video-form input').val('');
        $('.the-submit-video-form button').text('submitting...');
        $('.the-submit-video-form button').prop('disabled', true);

        var parser = document.createElement('a');
        parser.href = newVideo.src
        var youtubeID = parser.search.substring(parser.search.indexOf("=") + 1,
                                                parser.search.length);
        newVideo.src = 'https://www.youtube.com/embed/' + youtubeID;

        setTimeout(function(){
            var newVideoHtml = '<li class="video">' +
                '   <h2>' + newVideo.title + '</h2>' +
                '   <iframe width="640" height="390" src="' + newVideo.src +
                '" frameborder="0" allowfullscreen></iframe>' + '</li>';

            $('.the-list-of-videos').prepend(newVideoHtml);
            $('.the-submit-video-form button').text('Submit Video');
            $('.the-submit-video-form button').prop('disabled', false);
        }, 750);
    });


//$(function whenDomIsReady() {

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
