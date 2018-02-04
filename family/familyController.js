app.controller('familyController', ['$scope', 'familyService', function($scope, familyService) {

    $scope.table = "";
    $scope.getTable = function() {
        familyService.getfamily().then(function(response) {
            $scope.table = response.data;
        })
    };
}])

app.service('familyService', function($http) {

    this.getfamily = function() {
        return $http.get('/family');
    }
})