/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);

    myApp.controller("myController", function ($scope) {
        $scope.firstname = "first name is: praveen";
        $scope.lastname = "last name is : kumar";

    }); 

