import { newElement } from '../DOM-builders'

import ModalItem from './ModalItem'

export default function Modal(store) {

    // create Modal children
    const close = newElement('i')
        .setId('close')
        .addClass('close', 'fa', 'fa-times')

    const title = newElement('h1')
        .addClass('title')
        .text('Cart')

    const emptyCartMessage = newElement('p')
        .text('Your cart is empty.')
        .addClass('empty-cart-message')

    const cartContainer = newElement('div',
            emptyCartMessage
        )
        .addClass('cart-items')

    const checkoutButton = newElement('button')
        .text('Checkout')
        .addClass('button', 'is-fullwidth')

    const modalContainer = newElement('div',
            close,
            title,
            cartContainer,
            checkoutButton
        )
        .addClass('modal-container')

    // callback is called in the 'trigger' function and is passed the state
    store.addCallbackFor('TOGGLE_SHOW_CART', ({ isCartVisible }) => {
        const modal = $('#modal')
        if(isCartVisible) modal.addClass('show')
        else modal.removeClass('show')
    })

    store.addCallbackFor('ITEM_ADDED', ({ items, cart }) => {
        cart = [...cart]
        const cartItems = cart.map(id => ModalItem(items[id]))
        const cartList = newElement('ul', ...cartItems).addClass('menu')
        $('.cart-items').setChildren(cartList)
    })

    // create Model element and append the above children inside of it
    return newElement('section',
        modalContainer
    )
    .addClass('modal')
    .setId('modal')
}
