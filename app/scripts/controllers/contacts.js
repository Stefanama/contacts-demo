'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactsCtrl', function ($scope, Contacts, $state) {
    
    //define the contacts $scope variable as an array, this is not absolutely necessary, but it's for code clarity. It will containt the return contacts
    $scope.contacts=[];
    $scope.contactsLoading=true;
    //$scope variable to store an incoming error message
    $scope.errorMessage=null;
    
    //define a function to get all contacts, it could have been avoided but it's easier to test and mock
    function getAllContacts(){
        Contacts.getContacts().then(function(res){
            $scope.contacts=res;
            $scope.contactsLoading=false;
        }, function(err){
            //we're assuming that the error response contains a JSON with a message variable in it
            $scope.errorMessage=err.message;
        })
    };
    
    
    //get all the contacts
    getAllContacts();
    
    
    $scope.seeDetails=function(contact){
        $scope.selectedContact=contact;
        $scope.selectedContact.tags=[];
        $scope.selectedContact.tags.push(contact.tag);
    }

    $scope.addTag=function(tag){
        var idx=$scope.selectedContact.tags.indexOf(tag);
        if(idx == -1){
            $scope.selectedContact.tags.push(tag);
        }
    }
    $scope.removeTag=function(tag){
        var idx=$scope.selectedContact.tags.indexOf(tag);
        if(idx != -1){
            $scope.selectedContact.tags.splice(idx, 1);
        }
    }
  });
