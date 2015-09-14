/**
 * tasks.ctrl.js
 * 
 * This file contains the logic for manage users tasks to the app
 * 
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */

/**
 * tasks_ctrl function
 * @param object $scope
 * @param object $rootScope
 *
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */
 function tasks_ctrl($scope, $rootScope){
 	var _limit_input = 30;
 	
 	$scope.limitInput = _limit_input;
 	
 	/**
 	 * Add a new task
  	 * @author Algenis E. Vólquez <evolquez@gmail.com>
 	 * @date Sept 13th, 2015
 	 */
 	$scope.addTask = function(){
 		if($scope.task_name === undefined || $scope.task_name.trim() === "") return false;
		
		$rootScope.totalTasks.push({
			name : $scope.task_name,
			done : false,
			added: new Date().toLocaleString()
		});
		$rootScope.totalPendingTasks++;
		$scope.task_name = "";
		$scope.limitInput = _limit_input;
 	}

 	/**
 	 * Verify the limit of characters per tasks
 	 * @author Algenis E. Vólquez <evolquez@gmail.com>
 	 * @date Sept 13th, 2015
 	 */
 	$scope.changeInput = function(){
 		$scope.limitInput = (_limit_input - $scope.task_name.length);
 	}	

 	/**
 	 * Mark a task as done or undone
 	 * @param int id | the task index
 	 * @author Algenis E. Vólquez <evolquez@gmail.com>
 	 * @date Sept 13th, 2015
 	 */
 	$scope.doneUndoneTask = function(id){
 		if(id !== undefined){
			$rootScope.totalDoneTasks = ($rootScope.totalTasks[id].done) ? $rootScope.totalDoneTasks+1 : $rootScope.totalDoneTasks-1;
			$rootScope.totalPendingTasks = ($rootScope.totalTasks[id].done) ? $rootScope.totalPendingTasks-1 : $rootScope.totalPendingTasks+1;
		}
 	}

 	/**
 	 * Remove a task
 	 * @param int id | the task index
 	 * @author Algenis E. Vólquez <evolquez@gmail.com>
 	 * @date Sept 13th, 2015
 	 */
 	$scope.removeTask = function(id){
 		if(id !== undefined){
 			if($rootScope.totalTasks[id].done){
 				$rootScope.totalDoneTasks--;
 			}else{
 				$rootScope.totalPendingTasks--;
 			}
 			$rootScope.totalTasks.splice(id, 1);
 		}
 	}
 }