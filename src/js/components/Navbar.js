import { newElement } from '../DOM-builders'

export default function navbar(...children) {

    const cartIcon = newElement('i')
        .addClass('fa', 'fa-shopping-cart')
        .setId('cart-icon')

    const cartItems = newElement('span')
        .addClass('cart-items')

    const navbarItem = newElement('div',
            cartIcon,
            cartItems
        )
        .addClass('navbar-item')

    const navRight = newElement('div',
            navbarItem
        )
        .addClass('navbar-right', 'cart')

    const navLeft = newElement('div')
        .addClass('navbar-left')

    return newElement('nav', ...children,
        navLeft,
        navRight
    )
    .addClass('navbar')
}
