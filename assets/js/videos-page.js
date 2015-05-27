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
        }, 750);
    }]);
