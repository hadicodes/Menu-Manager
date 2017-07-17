$(document).ready(function () {
    getMenuItemsData();
    updateTotalButtonClick();
});

// Gets menu item's id from session storage
function getMenuItemsData() {
    const menuItemsIds = sessionStorage.getItem('menuItemIds');
    const url = '/api/menuItems/ids';
    const settings = {
        data: {
            menuItemIds: menuItemsIds
        }
    };
    $.ajax(url, settings).done(renderMenuItemsTemplate);
}

function renderMenuItemsTemplate(orderableMenuItems) {
    const template = $('#menuitems-list-template').html();
    const compiledTemplate = Handlebars.compile(template);
    const context = {
        orderableMenuItems: orderableMenuItems
    };
    const generatedDataHtml = compiledTemplate(context);
    $('#menuitems-list').append(generatedDataHtml);
}

function updateTotalButtonClick() {
    $('#update-total-button').click(updateTotal);
}

function getTotal() {
    var totalPriceForItems = $('.menuitem-quantity').map(function () {
        var menuItemQuantity = this.value;
        var menuItemPrice = parseFloat($(this).closest('.menuitem-details').find('.menuitem-price').text());
        return menuItemQuantity * menuItemPrice;
    }).get();
    var total = totalPriceForItems.reduce(function (prev, current) {
        return prev + current;
    });
    return total;
}

function updateTotal() {
    var total = getTotal();
    $('#total').html('$ '+ total);
}