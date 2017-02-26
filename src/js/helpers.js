// Used on food objects in food.json
Object.prototype.filterByType = function(type) {
    return Object.keys(this)
        .filter(key => this[key].type === type)
        .map(key => this[key])
}

function formatPrice(price) {
    return parseFloat(price || this).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

Object.prototype.formatPrice = formatPrice
Math.formatPrice = formatPrice

window.$ = function(query) {
    const elements = [...document.querySelectorAll(query)]

    function setChildren(children) {
        elements.forEach(el => {
            // remove current children
            while(el.firstChild) {
                el.removeChild(el.firstChild)
            }
            // add new children
            el.appendChild(children.cloneNode(true))
        })
    }

    function listenTo(event, cb) {
        elements.forEach(el => {
            el.addEventListener(event, cb)
        })
    }

    return { elements, setChildren, listenTo }
}
