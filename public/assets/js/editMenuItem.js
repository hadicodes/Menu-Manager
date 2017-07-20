$(document).ready(function () {
    itemSelected();
});

function itemSelected() {
    $('#edit-items').change(function () {
        getMenuItemData()
            .then(function (menuItem) {
                updateFormAction(menuItem.id);
                updateForm(menuItem);

            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

function updateForm(menuItem) {
    $('#item-name').val(menuItem.name);
    $('#item-description').val(menuItem.description);
    $('#item-category').val(menuItem.category);
    $('#item-price').val(menuItem.price);
}

function updateFormAction(id){
    $('#edit-form').attr('action', `/menu/edit/${id}?_method=PUT`);
}

function getMenuItemData() {
    const menuItemId = $('#edit-items option:selected').val();
    const url = '/api/menuItem';
    const settings = {
        data: {
            menuItemId: menuItemId
        }
    };
    return $.ajax(url, settings);
}