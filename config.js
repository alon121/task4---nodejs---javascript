var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'home.html'
        })
        .when("/familypage", { templateUrl: 'family/familyTemp.html', controller: 'familyController' })
        .when("/taskpage", { templateUrl: 'task/taskTemp.html', controller: 'taskController' })
        .when("/addtask", { templateUrl: 'task/addtaskTemp.html', controller: 'taskController' })

})