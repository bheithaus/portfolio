# /* Controllers */
angular.module 'coffeeboiler.controllers'

.controller 'ProjectsCtrl', ($scope, $http, $location, LoginModal, User) ->
  # handle login modal error here
  $scope.name = 'hey derr'


  $scope.projects = [
    {
      name: 'Super Snake'
      image: 'snake.png'
      techs: [
        'Express Framework'
        'MongoDB'
        'Angular JS'
        'CoffeeScript'
        'Pathfinding JS'
        'Custom Game Engine'
        'socket.io'
      ]
    },
    {
      name: 'Gryfter'
      image: 'gryfter.png'
      techs: [
        'Express Framework'
        'MongoDB'
        'Angular JS'
        'CoffeeScript'
        'Amazon S3'
        'node GM (graphics magick)'
      ]
    },
    {
      name: 'BitIsland'
      image: 'bitisland.png'
      techs: [
        'Express Framework'
        'Angular JS'
        'CoffeeScript'
        'MongoDB'
        'Python backend (collaborators code)'
      ]
    },
    {
      name: 'CoffeeBoiler'
      image: ''
      techs: [
        'Express'
        'Angular'
        'CoffeeScript'
        'Gulp'
        'MongoDB'
        'JWT Authentication'
        'Twitter Bootstrap'
      ]
    }
    {
      name: 'PVP Chess'
      image: 'chess.jpg'
      techs: [
        'Ruby on Rails'
        'Ruby Chess Library (mine)'
        'Backbone.js'
        'Vanilla JS'
      ]
    },
    {
      name: 'Soundvillage Radio'
      image: 'soundvillage.jpg'
      techs: [
        'Ruby on Rails'
        'Soundcloud API and javascript SDK'
        'Twitter Bootstrap'
        'Backbone.js'
        'Vanilla JS'
      ]
    },
    # h3 Coffee Boiler

  ]