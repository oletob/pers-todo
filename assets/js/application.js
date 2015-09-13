/**
 * application.js
 * 
 * This file contains all configs and route mappinng for perstodo app
 * 
 * Dependencies:
 *     ui.router
 *
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */

var perstodo_app = angular.module('perstodo-app', ['ui.router']);

/*Config route mapping with angularjs $routeProvider*/
perstodo_app.config(function($stateProvider, $urlRouterProvider){
	
	//homepage
	$stateProvider.state('home', {
		url 		: '/',
		templateUrl : 'views/home-page.html' 
	});

	//login
	$stateProvider.state('login', {
		url 		: '/app/login', 
		templateUrl : 'views/app/login.html',
		controller 	: 'loginCtrl'
	});

	//app main tamplate
	$stateProvider.state('app', {
		url 		: '/app', 
		templateUrl : 'views/app/template.html'
	});

	//app dashboard
	$stateProvider.state('app.dashboard', {
		url 		: '/dashboard',
		cache		: false, 
		views		: {
			'page-content' : {
				templateUrl : 'views/app/dashboard.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/');
});