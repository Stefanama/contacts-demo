'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactsCtrl', function ($scope, Contacts) {
    
    //define the contacts $scope variable as an array, this is not absolutely necessary, but it's for code clarity. It will containt the return contacts
    $scope.contacts=[];
    //$scope variable to store an incoming error message
    $scope.errorMessage=null;
    
    //define a function to get all contacts, it could have been avoided but it's easier to test and mock
    function getAllContacts(){
        Contacts.getContacts().then(function(res){
            $scope.contacts=res;
        }, function(err){
            //we're assuming that the error response contains a JSON with a message variable in it
            $scope.errorMessage=err.message;
        })
    };
    
    
    //get all the contacts
    getAllContacts();
    
    
    
    
  });
