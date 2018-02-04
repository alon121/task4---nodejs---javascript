app.controller('taskController', ['$scope', 'taskService', function($scope, taskService) {

    $scope.table = "";

    $scope.getTable = function() {
        taskService.gettask().then(function(response) {
            $scope.table = response.data;
        })
    };
}])
app.service('taskService', function($http) {

    this.gettask = function() {
        return $http.get('/home-tasks');
    }
})