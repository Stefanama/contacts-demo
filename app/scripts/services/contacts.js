'use strict';

/**
 * @ngdoc service
 * @name contactsApp.contacts
 * @description
 * # contacts
 * Service in the contactsApp.
 */
angular.module('contactsApp')
  .service('Contacts', function ($http) {
    var contacts={};
    
    contacts.getContacts=function(){
        return $http.get('http://www.mocky.io/v2/58c0284f0f0000bb035ee3b6').then(function(res){
            return res.data;
        }, function(err){
            return err;
        })
    }
    
    contacts.addContact=function(contact){
        return $http.post('http://www.mocky.io/v2/58088826100000e9232b75b0', contact).then(function(res){
            return res.data;
        }, function(err){
            return err;
        })
    }
    
    return contacts;
  });
