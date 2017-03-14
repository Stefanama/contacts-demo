'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('ContactsCtrl', function ($scope, Contacts, $state, ngDialog) {
    
    //define the contacts $scope variable as an array, this is not absolutely necessary, but it's for code clarity. It will containt the return contacts
    $scope.contacts=[];
    
    //flag to handle the loader
    $scope.contactsLoading=true;
    
    //$scope variable to store an incoming error message
    $scope.errorMessage=null;
    
    //temporary contact used for adding a new contact
    $scope.tempContact={};
    
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
    
    //called on item click and sets the clicked item as selected
    $scope.seeDetails=function(contact){
        $scope.selectedContact=contact;
        $scope.selectedContact.tags=[];
        if(contact.tag){
            $scope.selectedContact.tags.push(contact.tag);
        }
    }

    $scope.addTag=function(tag){
        //TODO implement adding a new tag to contact
    }
    
    //removes a tag from the contact tags
    $scope.removeTag=function(tag){
        var idx=$scope.selectedContact.tags.indexOf(tag);
        if(idx != -1){
            $scope.selectedContact.tags.splice(idx, 1);
        }
    }
    
    
    //shows the dialog for adding a contact
    $scope.openAddContactDialog = function () {
        ngDialog.open({scope: $scope, template: 'views/contact.addContact.html', className: 'ngdialog-theme-default' });
    };
    
    //push a new contact in the contacts list
    $scope.addContact=function(contact, form){
        if(form.$valid){
            $scope.contacts.push(contact);
            ngDialog.closeAll();
        }else{
            $scope.formNotValid=true;
        }
    }
  });
