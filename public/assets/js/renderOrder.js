$(document).ready(function () {
    renderOrder();
});

function renderOrder() {
    getMenuItemsData()
        .done(renderMenuItemsTemplate)
        .then(updateTotal)
        .then(updateTotalButtonClick)
        .then(addTipButtonClick);

}

// Gets menu item's id from session storage and retrieves info for them
function getMenuItemsData() {
    const menuItemsIds = sessionStorage.getItem('menuItemIds');
    const url = '/api/menuItems/ids';
    const settings = {
        data: {
            menuItemIds: menuItemsIds
        }
    };
    return $.ajax(url, settings);
}

// takes returned data (menuItems) from ajax call and feeds it to the template
function renderMenuItemsTemplate(orderableMenuItems) {
    const template = $('#menuitems-list-template').html();
    const compiledTemplate = Handlebars.compile(template);
    const context = {
        orderableMenuItems: orderableMenuItems
    };
    const generatedDataHtml = compiledTemplate(context);
    $('#menuitems-list').append(generatedDataHtml);
}
//==================================================================================================

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


function addTipButtonClick() {
    // On tip btn click
    $('.tip-button').click(function () {
        // get tip value from data- attribute in HTML
        var tipPercent = $(this).data('tip-multiplier');
        // multiply tip percent by the total; return the new total
        var tippedTotal = getTotal() * parseFloat(tipPercent);
        tippedTotal = tippedTotal.toFixed(2);
        //append to grand total
        $('#total').text(`$${tippedTotal}`);
    });
}

function updateTotal() {
    var total = getTotal();
    total = total.toFixed(2);
    $('#total').text(`$${total}`);
    $('#subtotal').text(`$${total}`);
}