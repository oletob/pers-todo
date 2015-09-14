 /**
 * login.ctrl.js
 * 
 * This file contains the logic for manage users authentication to the app
 * 
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */

/**
 * login_ctrl function
 * @param object $scope
 * @param object $timeout
 * @param object $location
 *
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */
function login_ctrl($scope, $timeout, $location){
	$scope.btnLogin = 'Login';
	$scope.logging = false;

	$scope.login = function(user){
		$scope.btnLogin = 'Logging in, please wait...';
		$scope.logging = true;
		
		$timeout(function(){
			$scope.btnLogin = 'Login';
			$scope.logging = false;
			if(user.email === 'admin@admin.com' && user.passw === 'admin'){
				delete $scope.auth_error;
				$scope.user.email = "";
				$scope.user.passw = "";
				$location.path('/app/dashboard'); //Redirect to dashboard
			}else{
				$scope.auth_error = true;
			}
		}, 800);
	}
}