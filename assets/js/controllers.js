 /**
 * controllers.js
 * 
 * This file contains all controllers for perstodo app
 * 
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */

 /**
  * loginCtrl
  * Manage user account authentication to the application.
  * 
  * Dependencies and params:
  *     $scope -- 
  *     $timeout --
  * 	$location
  *
  * @author Algenis E. Volquez <evolquez@gmail.com>
  * @date Sept 13th, 2015
  */
perstodo_app.controller('loginCtrl', ['$scope', '$timeout', '$location', function($scope, $timeout, $location){
	login_ctrl($scope, $timeout, $location); /*@see assets/js/controllers/login.ctrl.js*/
}]);

/**
 * tasksCtrl
 * Manage loggedin users tasks
 * 
 * Dependencies and params:
 *     $scope
 *     $rootScope
 *     ngDialog
 *
 * @author Algenis E. Volquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */
 perstodo_app.controller('tasksCtrl', ['$scope', '$rootScope', 'ngDialog', function($scope, $rootScope, ngDialog){
 	tasks_ctrl($scope, $rootScope, ngDialog); /*@see assets/js/controllers/tasks.ctrl.js*/
 }]);