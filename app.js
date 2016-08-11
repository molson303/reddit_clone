var app = angular.module('firstApp', []);
app.controller("ExercisesController", function($scope){
  $scope.counter = {}
  $scope.counter.tracker = 0;

  $scope.counterPos = function(){

      $scope.counter.tracker = $scope.counter.tracker += 1;

    }
  $scope.counterNeg = function(){
      $scope.counter.tracker = $scope.counter.tracker -= 1;
      
  }

})
