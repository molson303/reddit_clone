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
})
