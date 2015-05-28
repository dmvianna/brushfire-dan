angular.module('brushfire_videosPage', [])
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            '*://www.youtube.com/**'
        ]);
    });

angular.module('brushfire_videosPage').controller('PageCtrl', [
    '$scope', '$timeout',
    function ( $scope, $timeout ) {

        $scope.videosLoading = true;

        $timeout(function afterRetrievingVideos (){
            var _videos = [{
                title: 'Zombie Incidents',
                src: 'https://www.youtube.com/embed/hD5SZ6v2JLQ'
            }, {
                title: 'Car crashes',
                src: 'https://www.youtube.com/embed/e0LgMwmfmPU'
            }, {
                title: 'Forklift Incidents',
                src: 'https://www.youtube.com/embed/EjOvI0TOx98'
            }];

            $scope.videosLoading = false;

            $scope.videos = _videos;

            $scope.submitNewVideo = function() {

                if ($scope.busySubmittingVideo) {
                    return;
                }

                var _newVideo = {
                    title: $scope.newVideoTitle,
                    src: $scope.newVideoSrc,
                };

                var parser = document.createElement('a');

                parser.href = _newVideo.src

                var youtubeID = parser.search.substring(
                    parser.search.indexOf("=") + 1,
                    parser.search.length);

                _newVideo.src = 'https://www.youtube.com/embed/' + youtubeID;

                $scope.busySubmittingVideo = true;

                $timeout(function() {
                    $scope.videos.unshift(_newVideo);
                    $scope.busySubmittingVideo = false;
                    $scope.newVideoTitle = '';
                    $scope.newVideoSrc = '';
            
                }, 750);
            };
        });
    }]);
