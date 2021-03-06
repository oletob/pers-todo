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

var perstodo_app = angular.module('perstodo-app', ['ui.router', 'ngDialog']);

//Config route mapping with angularjs $routeProvider on 'perstodo-app' module loading
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
			'page-content': {
				templateUrl : 'views/app/dashboard.html'
			}
		}
	});

	// app tasks
	$stateProvider.state('app.tasks', {
		url 		: '/my-tasks',
		cache  		: false,
		views 		: {
			'page-content': {
				templateUrl : 'views/app/my-tasks.html',
				controller 	: 'tasksCtrl'
			}
		}
	});

	// app pending tasks
	$stateProvider.state('app.pending-tasks', {
		url 		: '/pending-tasks',
		cache  		: false,
		views 		: {
			'page-content': {
				templateUrl : 'views/app/pending-tasks.html',
				controller 	: 'tasksCtrl'
			}
		}
	});

	// app done tasks
	$stateProvider.state('app.done-tasks', {
		url 		: '/done-tasks',
		cache  		: false,
		views 		: {
			'page-content': {
				templateUrl : 'views/app/done-tasks.html',
				controller 	: 'tasksCtrl'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
});

//This method should be performed when the injector is done loading all modules
perstodo_app.run(function($rootScope, ngDialog){
	
	$rootScope.dialogsActive = []; //Stores all dialogs active ID

	/**
	 * Close a modal dialog box by its id
	 * @param string section | The section where the dialog box was created
	 * @author Algenis E. Volquez <evolquez@gmail.com>
	 */
	$rootScope.closeDialog = function(section){
		if(typeof $rootScope.dialogsActive[section] !== 'undefined'){
			ngDialog.close($rootScope.dialogsActive[section]);
			$rootScope.dialogsActive[section] = '';
		}
	}

	/**
	 * Iterates the given array and find the match index to the given id, then returns the
	 * element or item found.
	 * @param array array
	 * @param int id
	 * @return array | object | string | number | boolean
	 * @author Algenis E. Volquez <evolquez@gmail.com> 
	 */
	$rootScope.findArrayIndexById = function(array, id){
		
		var _return = false;
		if(Object.prototype.toString.call(array) === '[object Array]'){
			angular.forEach(array, function(value, index){
				if(value.id === id){_return = index;}
			});
		}
		return _return;
	}

	$rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
		$rootScope.bodyClass = 'home';
		/*Apply css class to the application body*/
		var nw = newUrl.split('#')[1];
		if(nw.indexOf('app') > -1){
			if(nw === '/app/login'){
				$rootScope.bodyClass = 'login';
			}else{
				//Hardcoded
				if(typeof $rootScope.totalTasks === 'undefined'){
					$rootScope.totalTasks = [];
					$rootScope.totalPendingTasks = 0;
					$rootScope.totalDoneTasks = 0;
				}
				$rootScope.bodyClass = 'account';
			}
		}

		//Sets the active option on sidebar left menu
		switch(nw){
			case '/app/dashboard'		: $rootScope.section = 'dash'; break;
			case '/app/my-tasks'		: $rootScope.section = 'my-tasks'; break;
			case '/app/pending-tasks'	: $rootScope.section = 'pending-tasks'; break;
			case '/app/done-tasks'		: $rootScope.section = 'done-tasks'; break;
		}
	});
});