coffeeboiler = angular.module 'coffeeboiler', [
  'ui.router'
  'ui.bootstrap'
  'ngCookies'
  'ngResource'
  'coffeeboiler.controllers'
  'coffeeboiler.directives'
  'coffeeboiler.services'
]

.config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
  $httpProvider.interceptors.push 'authInterceptor'

  # html location
  $locationProvider.html5Mode true

  $stateProvider
    .state 'home',
      url: '/'
      templateUrl: 'partials/home'
      controller: 'HomeCtrl'

    .state 'tech',
      url: '/tech'
      templateUrl: 'partials/skills'
      controller: 'SkillsCtrl'

    .state 'resume',
      url: '/resume'
      templateUrl: 'partials/resume'
      controller: 'SkillsCtrl'

    .state 'projects',
      url: '/projects'
      templateUrl: 'partials/project_list'
      controller: 'ProjectListCtrl'

    .state 'project',
      url: '/projects/:project_id'
      templateUrl: 'partials/project'
      controller: 'ProjectCtrl'

  # For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise '/portfolio'

.run ['$rootScope', '$state', 'Auth', ($rootScope, $state, Auth) ->
  Auth.monitor()
]