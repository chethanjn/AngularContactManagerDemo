/**
 * Created by SA on 03-10-2015.
 */
ngContactManagerApp.factory('contactManagerService',
    function () {
        var contacts =  [
            {
                id: 1,
                name : 'Terrence S. Hatfield',
                tel: '651-603-1723',
                email: 'TerrenceSHatfield@rhyta.com'
            },
            {
                id: 2,
                name : 'Chris M. Manning',
                tel: '513-307-5859',
                email: 'ChrisMManning@dayrep.com'
            },
            {
                id: 3,
                name : 'Ricky M. Digiacomo',
                tel: '918-774-0199',
                email: 'RickyMDigiacomo@teleworm.us'
            },
            {
                id: 4,
                name : 'Michael K. Bayne',
                tel: '702-989-5145',
                email: 'MichaelKBayne@rhyta.com'
            },
            {
                id: 5,
                name : 'John I. Wilson',
                tel: '318-292-6700',
                email: 'JohnIWilson@dayrep.com'
            },
            {
                id: 6,
                name : 'Rodolfo P. Robinett',
                tel: '803-557-9815',
                email: 'RodolfoPRobinett@jourrapide.com'
            }
        ];

        return {
            getContacts: function () {
                return contacts;
            },
            editContacts: function (editContactModal) {
                angular.forEach(contacts,function(value,index){
                    if(value.id == editContactModal.id){
                        value.name = editContactModal.name;
                        value.tel = editContactModal.tel;
                        value.email = editContactModal.email;
                    }
                });
                return contacts;
            },
            addContacts:function (newContactModal) {
                contacts.push({id: _.random(6, 15), name:newContactModal.fullName, tel:newContactModal.tel, email:newContactModal.email});
                return contacts;
            }
        }
    });