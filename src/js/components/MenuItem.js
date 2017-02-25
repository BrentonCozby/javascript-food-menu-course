import { newElement } from '../DOM-builders'

// Used in the MenuList component
export default function MenuItem(itemData) {
    const name = newElement('h3')
        .addClass('name')
        .text(itemData.name)

    const price = newElement('span')
        .addClass('price', 'is-pulled-right')
        .text(itemData.price.formatPrice())

    const description = newElement('p')
        .addClass('desc', 'is-pulled-right')
        .text(itemData.description)

    const addToCart = newElement('button')
        .addClass('add-to-cart', 'button', 'is-pulled-right')
        .text('Add to Cart')

    const mediaContent = newElement('div',
            name,
            price,
            description,
            addToCart
        )
        .addClass('media-content')

    return newElement('article',
        mediaContent
    )
    .addClass('media', 'menu-item')
    .attr('key', itemData.id)
}
