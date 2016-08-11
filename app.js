var app = angular.module('firstApp', []);
app.controller("ExercisesController", function($scope){
  $scope.counter = {}
  $scope.counter.tracker = 0;


  $scope.counterPos = function(post){
    post.votes = post.votes + 1;
    }
  $scope.counterNeg = function(post){
    post.votes = post.votes - 1;
    }

})
