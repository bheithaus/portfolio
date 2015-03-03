# /* Controllers */
angular.module 'coffeeboiler.controllers'

.controller 'ProjectListCtrl', ($scope, $http, $location, LoginModal, User, ProjectList) ->
  $scope.projects = ProjectList