var app = angular.module('firstApp', ['ngAnimate']);
app.controller("ExercisesController", function($scope){
  $scope.counter = {}
  $scope.counter.tracker = 0;

  $scope.counterPos = function(post){
    post.votes ++;
    }
  $scope.counterNeg = function(post){
    post.votes --;
    }

  $scope.addInfo = function(post) {
        // post.date = moment().calendar();
        // post.comments = [];
        // post.commentsVisible = false;
        // post.newCommentVisible = false;
        $scope.posts.push(post);
        post.votes = 0;
        // $scope.view.newPostVisible = false;
        $scope.info = {};
        $scope.submitForm.$setUntouched();

      }





  $scope.posts =
    [
      {
        title: 'Ski towns all dudes?',
        image: 'https://i.ytimg.com/vi/zMshy41lXjs/maxresdefault.jpg',
        author: 'Jackster',
        description: 'When the ski season comes around, Its always a bro tastic time.',
        votes: 1
      },
      {
        title: 'Ski Bums and life',
        image: 'http://bloximages.newyork1.vip.townnews.com/jhnewsandguide.com/content/tncms/assets/v3/editorial/1/15/115e4234-8d89-59e3-808d-98c83a8eed8d/56faf5226f02a.image.jpg?resize=645%2C760',
        author: 'Scally McGree',
        description: 'The life of a ski bum can be extremely.......',
        votes: 1
      },
      {
        title: 'Can we use your hot tub Bra?',
        image: 'http://m5.paperblog.com/i/24/249371/for-those-about-to-ski-bum-we-salute-you-L-kGGina.jpeg',
        author: 'Jack Daniels',
        description: 'The night we ventured into our neighbors hot tub, the events that occured after are unspeakble.',
        votes: 1
      }
    ]




})
