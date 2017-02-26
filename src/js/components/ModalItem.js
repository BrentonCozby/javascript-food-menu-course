import { newElement } from '../DOM-builders'

export default function ModalItem(itemData) {

    const name = newElement('span')
        .text(itemData.name)
        .addClass('name')

    const price = newElement('span')
        .text(itemData.price.formatPrice())
        .addClass('price', 'is-pulled-right')

    const removeButton = newElement('i')
        .addClass('fa', 'fa-times', 'remove')

    const item = newElement('li',
            name,
            price,
            removeButton
        )
        .addClass('menu-item')
        .setData({ key: itemData.id })

    return newElement('div',
        item
    )
    .addClass('modal-item')
}
