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
	$stateProvider.state('home', {
		url 		: '/',
		templateUrl : 'views/home-page.html' 
	});

	$urlRouterProvider.otherwise('/');
});