// Used on food objects in food.json
Array.prototype.filterByType = function(type) {
    return this.filter(item => item.type === type)
}

function formatPrice(price) {
    return parseFloat(price || this).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

Object.prototype.formatPrice = formatPrice
Math.formatPrice = formatPrice
