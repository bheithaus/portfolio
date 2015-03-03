window.coffeeboiler_constants = {
  some_url: 'http://www.example.com'
};

'use strict';
angular.module('coffeeboiler.directives', []).directive('ngCard', function() {
  return {
    restrict: 'AE',
    scope: {
      skill: '='
    },
    templateUrl: 'views/partials/skill',
    link: function() {
      return console.log('hmmm');
    }
  };
}).directive('tagManager', function() {
  return {
    restrict: 'E',
    scope: {
      tags: '='
    },
    template: '<div class="tags">' + '<a ng-repeat="(idx, tag) in tags" class="tag" ng-click="remove(idx)">{{tag}}</a>' + '</div>' + '<input type="text" placeholder="Add a tag..." ng-model="new_value"></input> ' + '<a class="btn" ng-click="add()">Add</a>',
    link: function($scope, $element) {
      var input;
      input = angular.element($element.children()[1]);
      $scope.add = function() {
        $scope.tags.push($scope.new_value);
        return $scope.new_value = "";
      };
      $scope.remove = function(idx) {
        return $scope.tags.splice(idx, 1);
      };
      return input.bind('keypress', function(event) {
        if (event.keyCode === 13) {
          return $scope.$apply($scope.add);
        }
      });
    }
  };
});

angular.module('coffeeboiler.filters', []).filter('interpolate', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
});

angular.module('coffeeboiler.controllers', []);

angular.module('coffeeboiler.controllers').controller('HomeCtrl', function($scope, $http, $location, LoginModal, User) {
  return $scope.name = 'hey derr';
});

angular.module('coffeeboiler.controllers').controller('ProjectCtrl', function($scope, $http, $location, LoginModal, User, ProjectList, $stateParams) {
  return $scope.project = ProjectList[$stateParams.project_id];
});

angular.module('coffeeboiler.controllers').controller('ProjectListCtrl', function($scope, $http, $location, LoginModal, User, ProjectList) {
  return $scope.projects = ProjectList;
});

angular.module('coffeeboiler.controllers').controller('AppCtrl', function($scope, $location, LoginModal, RegisterModal, UserSession, Auth, $state) {
  $scope.logout = function() {
    return Auth.logout(function() {
      return $state.transitionTo('home');
    });
  };
  $scope.login = LoginModal.open;
  $scope.register = RegisterModal.open;
  $scope.loggedIn = function() {
    return UserSession.loggedIn();
  };
  return $scope.user = UserSession;
});

angular.module('coffeeboiler.controllers').controller('SkillsCtrl', function($scope, $http) {
  $scope.languages = [
    {
      name: 'Ruby',
      href: 'ruby-lang.org',
      logo: 'https://www.ruby-lang.org/images/header-ruby-logo.png'
    }, {
      name: 'CoffeeScript',
      href: 'coffeescript.org',
      logo: 'http://coffeescript.org/documentation/images/logo.png'
    }, {
      name: 'Javascript',
      href: 'developer.mozilla.org/en-US/docs/Web/JavaScript'
    }
  ];
  $scope.frontend = [
    {
      name: 'Angular JS',
      href: 'angularjs.org',
      logo: 'http://angularjs.org/img/AngularJS-small.png'
    }, {
      name: 'HTML 5',
      href: 'html5rocks.com/en/',
      logo: 'http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'
    }, {
      name: 'Google Maps',
      href: 'developers.google.com/maps',
      logo: 'data:image/jpeg;base64,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'
    }, {
      name: 'Facebook Graph',
      href: 'developers.facebook.com',
      logo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5yFu-smsPPQyuzwxXOpuTlYzrBDjOWYhrA_txOfGpEy0sy8KNxmK3aU0Z'
    }, {
      name: 'CSS 3 ( stylus / sass / less )',
      href: ''
    }, {
      name: 'Twitter Bootstrap 3',
      href: 'getbootstrap.com'
    }
  ];
  $scope.backend = [
    {
      name: 'Node.js',
      href: 'nodejs.org',
      logo: 'http://nodejs.org/images/logo.png'
    }, {
      name: 'Ruby on Rails',
      href: 'rubyonrails.org/',
      logo: 'http://rubyonrails.org/images/rails.png'
    }, {
      name: 'MongoDB',
      href: 'mongodb.org',
      logo: 'http://media.mongodb.org/logo-mongodb-header.png'
    }, {
      name: 'PostgreSQL',
      href: 'postgresql.org/',
      logo: 'http://www.postgresql.org/media/img/layout/hdr_left.png'
    }, {
      name: 'Redis',
      href: 'redis.io',
      logo: 'http://redis.io/images/redis.png'
    }, {
      name: 'Express JS',
      href: 'expressjs.org'
    }, {
      name: 'Socket.io',
      href: 'socket.io'
    }, {
      name: 'Grunt'
    }, {
      name: 'Gulp'
    }
  ];
  return $scope.devops = [
    {
      name: 'Vagrant',
      href: 'vagrantup.com',
      logo: 'http://www.vagrantup.com/images/logo_vagrant-81478652.png'
    }, {
      name: 'AWS',
      href: 'aws.amazon.com',
      logo: 'http://blog.equinix.com/wp-content/uploads/2013/10/amazon-aws-logo.jpg'
    }, {
      name: 'nginx',
      href: 'nginx.org',
      logo: 'http://nginx.org/nginx.gif'
    }
  ];
});

angular.module('coffeeboiler.services', []);

angular.module('coffeeboiler.services').factory('LoginModal', function($modal, $log) {
  return {
    open: function() {
      var modalInstance;
      return modalInstance = $modal.open({
        templateUrl: 'partials/session/login',
        controller: 'LoginInstanceCtrl'
      });
    }
  };
}).factory('RegisterModal', function($modal, $log) {
  return {
    open: function() {
      var modalInstance;
      return modalInstance = $modal.open({
        templateUrl: 'partials/session/register',
        controller: 'RegisterInstanceCtrl'
      });
    }
  };
});

angular.module('coffeeboiler.services').value('ProjectList', {
  1: {
    name: 'Super Snake',
    description: '1 - 2 player Snake Game, based on the classic.',
    image: 'snake.png',
    href: 'snakeaholic.com',
    git: 'bheithaus/supersnake',
    techs: ['Express Framework', 'MongoDB', 'Angular JS', 'CoffeeScript', 'Pathfinding JS', 'Custom Game Engine', 'socket.io']
  },
  2: {
    name: 'Financial Dashboard',
    description: 'Angular App built for a large portfolio management client',
    image: 'financial_dashboard.png',
    techs: ['Proprietary'],
    more: true,
    screencap: '/files/financial_dashboard.mp4'
  },
  7: {
    name: 'Gryfter',
    description: '(WIP) A card trading application designed for mobile users.  One can capture an image, give it a price and some other metadata, then trade with other users for their image cards.',
    image: 'gryfter.png',
    techs: ['Express Framework', 'MongoDB', 'Angular JS', 'CoffeeScript', 'Amazon S3', 'node GM (graphics magick)']
  },
  3: {
    name: 'BitIsland',
    description: 'A hackathon project, an Electronic Communication Network and trading platform centered around the BitCoin currency.  (I designed and built the front end of the app, with a teamate building an order matching engine in Python, which I interfaced with)',
    image: 'bitisland.png',
    href: 'bitisland.net',
    techs: ['Express Framework', 'Angular JS', 'CoffeeScript', 'MongoDB', 'Python backend (collaborators code)']
  },
  4: {
    name: 'CoffeeBoiler',
    description: 'Boilerplate for an application with all my favorite open source web development tools!  I built this as a seed to speed up starting a new project, for myself and hopefully others.',
    image: '',
    href: 'github.com/bheithaus/coffeeboiler',
    git: 'bheithaus/coffeeboiler',
    techs: ['Express', 'Angular', 'CoffeeScript', 'Gulp', 'MongoDB', 'JWT Authentication', 'Twitter Bootstrap']
  },
  5: {
    name: 'PVP Chess',
    description: 'A multiplayer online Chess Game with my custom chess library, voice activated moves',
    image: 'chess.jpg',
    href: 'pvpchess.herokuapp.com',
    git: 'bheithaus/pvp-chess',
    techs: ['Ruby on Rails', 'Ruby Chess Library (mine)', 'Backbone.js', 'Vanilla JS']
  },
  6: {
    name: 'Soundvillage Radio',
    description: 'Internet Radio, drawing songs from Soundcloud API, using SoundManager 2 for streaming playback',
    image: 'soundvillage.jpg',
    href: 'soundvillage.herokuapp.com',
    git: 'bheithaus/soundvillage',
    techs: ['Ruby on Rails', 'Soundcloud API and javascript SDK', 'Twitter Bootstrap', 'Backbone.js', 'Vanilla JS']
  }
});

angular.module('coffeeboiler.services').factory('Session', function($resource) {
  return $resource('/authentication');
}).factory('User', function($resource) {
  return $resource('/register');
}).service('socket', function(UserSession) {
  return io.connect(window.location.origin, {
    query: 'token=' + UserSession.loggedIn()
  });
}).service('UserSession', function($window) {
  var current, session;
  current = $window.sessionStorage.token;
  return session = {
    login: function(user) {
      $window.sessionStorage.token = user.token;
      return current = user.token;
    },
    logout: function() {
      delete $window.sessionStorage.token;
      return current = null;
    },
    loggedIn: function() {
      return current;
    }
  };
}).factory('Auth', function($rootScope, Session, UserSession, $state, LoginModal, User) {
  return {
    login: function(provider, user, callback) {
      if (typeof callback !== 'function') {
        callback = angular.noop;
      }
      return Session.save({
        provider: provider,
        name: user.name,
        password: user.password
      }, function(data) {
        console.log(data);
        if (!data.error) {
          UserSession.login(data);
          return callback();
        } else {
          UserSession.logout();
          return callback(data.error);
        }
      });
    },
    create: function(user, callback) {
      if (typeof callback !== 'function') {
        callback = angular.noop;
      }
      return User.save(user, function(data) {
        if (!data.errors) {
          UserSession.login(data);
        }
        return callback(data.errors);
      });
    },
    logout: function(callback) {
      if (typeof callback !== 'function') {
        callback = angular.noop;
      }
      return Session.remove(function() {
        UserSession.logout();
        return callback();
      });
    },
    monitor: function() {
      return $rootScope.$on('$stateChangeStart', function(event, current, prev) {
        if (current.authenticate && !UserSession.loggedIn()) {
          $state.transitionTo('home');
          LoginModal.open();
          return event.preventDefault();
        }
      });
    }
  };
}).factory('authInterceptor', function($rootScope, $q, $window, $location, UserSession) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      if (UserSession.loggedIn() && config.url.match(/^\/api/)) {
        config.headers.Authorization = 'Bearer ' + UserSession.loggedIn();
      }
      return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        UserSession.logout();
        $location.path('/');
      }
      return response || $q.when(response);
    }
  };
});

var coffeeboiler;

coffeeboiler = angular.module('coffeeboiler', ['ui.router', 'ui.bootstrap', 'ngCookies', 'ngResource', 'coffeeboiler.controllers', 'coffeeboiler.directives', 'coffeeboiler.services']).config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
  $locationProvider.html5Mode(true);
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'partials/home',
    controller: 'HomeCtrl'
  }).state('tech', {
    url: '/tech',
    templateUrl: 'partials/skills',
    controller: 'SkillsCtrl'
  }).state('resume', {
    url: '/resume',
    templateUrl: 'partials/resume',
    controller: 'SkillsCtrl'
  }).state('projects', {
    url: '/projects',
    templateUrl: 'partials/project_list',
    controller: 'ProjectListCtrl'
  }).state('project', {
    url: '/projects/:project_id',
    templateUrl: 'partials/project',
    controller: 'ProjectCtrl'
  });
  return $urlRouterProvider.otherwise('/portfolio');
}).run([
  '$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {
    return Auth.monitor();
  }
]);
