var elastiChat = angular.module('ElastiChatModule', ['ngCordova', 'ngAnimate', 'monospaced.elastic', 'angularMoment']);

elastiChat.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('app.elasti-chat', {
    url: '/elasti-chat',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/ElastiChat/chat.html',
        controller: 'ElastiChatCtrl'
      }
    }
  });
});