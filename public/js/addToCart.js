// Gets values of all checked items on cart page
var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
}).get();