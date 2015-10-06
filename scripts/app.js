'use strict';

var ngContactManagerApp = angular.module('ngContactManager', [
        'ngRoute'
    ]).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/addContact', {
                    templateUrl: 'partilas/addNewContact.html',
                    controller: 'ContactListController',
                    title: 'Add Contact'
                })
                .when('/editContact', {
                    templateUrl: 'partilas/editContact.html',
                    controller: 'ContactListController',
                    title: 'Edit Contact'
                })
                .when('/listContact', {
                    templateUrl: 'partilas/browseContacts.html',
                    controller: 'ContactListController',
                    title: 'Browse Contacts'
                })
                .otherwise({
                    redirectTo: '/listContact'
                });
        }
    ])
    .run(function($rootScope, $route) {
        $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
            $rootScope.title = $route.current.title;
        });
    });
