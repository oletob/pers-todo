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
 * @param object ngDialog
 *
 * @author Algenis E. Vólquez <evolquez@gmail.com>
 * @date Sept 13th, 2015
 */
function tasks_ctrl($scope, $rootScope, ngDialog){
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
			id 		: $rootScope.totalTasks.length+1,
			name 	: $scope.task_name,
			done 	: false,
			added	: new Date().toLocaleString(),
			done_on : '...'
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
 			//Find the task index
 			var taskIndex = $rootScope.findArrayIndexById($rootScope.totalTasks, id);
 			if(typeof taskIndex === 'number'){
 				//Set the done date
 				$rootScope.totalTasks[taskIndex].done_on = ($rootScope.totalTasks[taskIndex].done) ? 
 					new Date().toLocaleString() : '...';
				$rootScope.totalDoneTasks = ($rootScope.totalTasks[taskIndex].done) ? 
					$rootScope.totalDoneTasks+1 : $rootScope.totalDoneTasks-1;
				$rootScope.totalPendingTasks = ($rootScope.totalTasks[taskIndex].done) ? 
					$rootScope.totalPendingTasks-1 : $rootScope.totalPendingTasks+1;	
 			}
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
			var taskIndex = $rootScope.findArrayIndexById($rootScope.totalTasks, id);
			if(typeof taskIndex === 'number'){
	 			if($rootScope.totalTasks[taskIndex].done){
	 				$rootScope.totalDoneTasks--;
	 			}else{
	 				$rootScope.totalPendingTasks--;
	 			}
	 			$rootScope.totalTasks.splice(taskIndex, 1);
			}
 			$rootScope.closeDialog('tasks');
 		}
 	}

 	/**
 	 * Show a confirm dialog before delete an specific task
 	 * @param int id | the task index
 	 * @author Algenis E. Volquez <evolquez@gmail.com>
 	 * @date Sep 23th, 2015
 	 */
 	$scope.preRemoveTask = function(id){
 		$scope.dialogTitle 	= 'Delete task';
 		$scope.contentText 	= 'Delete selected task?';
 		$scope.entityId 	= id;
 		
 		var _dobject = ngDialog.open({
 			template 	: 'views/modals/confirm.html',
 			cache 		: false,
 			scope  		: $scope
 		});
 		$rootScope.dialogsActive['tasks'] = _dobject.id;
 	}
}