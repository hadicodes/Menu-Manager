$(document).ready(function() {
    const menuItemsIds = sessionStorage.getItem('menuItemIds');
    const url = '/api/menuItems/ids';
    const settings = {data: {menuItemIds: menuItemsIds}};
    $.ajax(url, settings).done(function(orderableMenuItems) {
        const template = $('#menuitems-list-template').html();
        const compiledTemplate = Handlebars.compile(template);
        const context = {orderableMenuItems: orderableMenuItems};
        const generatedDataHtml = compiledTemplate(context);
        debugger;
        $('#menuitems-list').append(generatedDataHtml);
    })
});