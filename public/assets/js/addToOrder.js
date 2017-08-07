// Gets values of all checked items on cart page
function getCheckedValues() {
    var checkedValues = $('input:checkbox:checked').map(function () {
        return this.value;
    }).get();
    return checkedValues;
}

// Save values of data to sessionStorage
function storeIdsInSessionStorage() {
    var menuItemIds = getCheckedValues();
    var originaldata = sessionStorage.getItem('menuItemIds');
    sessionStorage.setItem('menuItemIds', menuItemIds.concat(originaldata));
}

// redirects to menu page
function redirectToOrderPage() {
    window.location = "/order";
}

$('#add-items-btn').on('click', function () {
    storeIdsInSessionStorage();
    redirectToOrderPage();
});