# /* Controllers */
angular.module 'coffeeboiler.controllers'

.controller 'ProjectCtrl', ($scope, $http, $location, LoginModal, User, ProjectList, $stateParams) ->
  $scope.project = ProjectList[$stateParams.project_id]