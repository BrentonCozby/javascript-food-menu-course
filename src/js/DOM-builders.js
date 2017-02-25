export function newElement(type, ...children) {
    const newElement = document.createElement(type)
    // every child must be a DOM node. Can't be a string, number, or array
    children.forEach(child => newElement.appendChild(child))
    return newElement
}

Object.prototype.setId = function(id) {
    const element = this.cloneNode(true)
    return Object.assign(element, { id })
}

Object.prototype.addClass = function(...names) {
    const element = this.cloneNode(true)
    names.forEach(name => element.classList.add(name))
    return element
}

Object.prototype.removeClass = function(...names) {
    const element = this.cloneNode(true)
    names.forEach(name => element.classList.remove(name))
    return element
}

Object.prototype.setData = function(dataObj) {
    const element = this.cloneNode(true)
    for(let key in dataObj) {
        if(dataObj.hasOwnProperty(key)) {
            element.dataset[key] = dataObj[key]
        }
    }
    return element
}

Object.prototype.attr = function(attribute, value) {
    const element = this.cloneNode(true)
    element.setAttribute(attribute, value)
    return element
}

Object.prototype.text = function(words) {
    const _text = document.createTextNode(words)
    this.appendChild(_text)
    return this
}
