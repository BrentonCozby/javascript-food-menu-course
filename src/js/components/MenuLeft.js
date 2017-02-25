import { newElement } from '../DOM-builders'
import MenuList from './MenuList'

// Used in the Menu component
export default function MenuLeft(items = []) {

    const appetizers = MenuList('Appetizers', items.filterByType('appetizer'))
    const burgers = MenuList('Burgers', items.filterByType('burger'))

    return newElement('div',
        appetizers,
        burgers
    )
    .addClass('column', 'is-6')
}
