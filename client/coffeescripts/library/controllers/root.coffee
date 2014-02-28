# /* Controllers */
angular.module 'coffeeboiler.controllers'

#root scope Controller
.controller 'AppCtrl', ($scope, $location, LoginModal, RegisterModal, UserSession, Auth, $state) ->
  # handle login modal error here
  $scope.logout = ->
    Auth.logout ->
      $state.transitionTo 'home'

  $scope.login = LoginModal.open
  $scope.register = RegisterModal.open

  $scope.loggedIn = ->
    UserSession.loggedIn()

  $scope.user = UserSession
  
  # $(()->
  #   once = false
  #   blur = 20
  #   $body = $('body')

  #   clarify = () ->
  #     once = true
  #     if blur >= 0
  #       console.log blur
  #       $body.css('-webkit-filter', "blur(#{ blur }px)")
  #       blur--
  #       window.setTimeout clarify, 10


  #   clarify() if not once
  # )


