import { newElement } from '../DOM-builders'
import MenuItem from './MenuItem'

// Used in the MenuLeft and MenuRight components
export default function MenuList(headline, items = []) {
    const menuItems = items.map(MenuItem)

    const title = newElement('h1')
        .text(headline)
        .addClass('title')

    return newElement('div',
        title,
        ...menuItems
    )
    .addClass('collection')
}
