/**
 * Created by SA on 02-10-2015.
 */
ngContactManagerApp.controller('ContactListController', ['$scope','$rootScope','$location','contactManagerService','contactItemService',
    function($scope,$rootScope,$location,contactManagerService,contactItemService) {

        $scope.newContactModal={};
        $scope.editContactModal={};


        /***Browse Contact***/
        $scope.contactArray = contactManagerService.getContacts();


        /***Create Contact***/
        $scope.createContact = function(){
            $scope.contactArray = contactManagerService.addContacts($scope.newContactModal);
            $location.path('/listContact');
        };


        /***initialize edit Template fields ***/
        $scope.gotoEditPage = function(contact){
            $location.path('/editContact');
            contactItemService.setContactItem(contact);
        };
        $scope.setFieldModalData = function(){
            $scope.editContactModal.id = contactItemService.getContactItem().id;
            $scope.editContactModal.name = contactItemService.getContactItem().name;
            $scope.editContactModal.tel = contactItemService.getContactItem().tel;
            $scope.editContactModal.email = contactItemService.getContactItem().email;
        };



        /***Edit Contact***/
        $scope.editContact = function(){
            $scope.contactArray = contactManagerService.editContacts($scope.editContactModal);
            $location.path('/listContact');
        };



        /***Delete Contact***/
        $scope.deleteContact = function(contact){
            var remIndex;
            angular.forEach($scope.contactArray,function(value,index){
                if(value.name == contact.name){
                    remIndex=index;
                }
            });
            $scope.contactArray.splice(remIndex, 1);
        }
    }]);