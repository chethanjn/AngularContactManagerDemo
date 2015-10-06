/**
 * Created by SA on 03-10-2015.
 */
ngContactManagerApp.factory('contactItemService',
    function () {
        var contactHoldData = {};
        return {
            setContactItem: function (newObj) {
                contactHoldData = newObj;
            },
            getContactItem: function () {
                return contactHoldData;
            }
        };
    });