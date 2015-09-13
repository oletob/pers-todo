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
  * Manage usres account authentication to the application.
  * 
  * Dependencies and params:
  *     $scope -- 
  *     $timeout --
  * 	$location
  */
perstodo_app.controller('loginCtrl', ['$scope', '$timeout', '$location', function($scope, $timeout, $location){
	login_ctrl($scope, $timeout, $location); /*@see assets/js/controllers/login.ctrl.js*/
}]);