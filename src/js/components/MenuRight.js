import { newElement } from '../DOM-builders'
import MenuList from './MenuList'

export default function MenuRight(items = []) {

    const appetizers = MenuList('Soups and Salads', items.filterByType('soup_salad'))
    const desserts = MenuList('Desserts', items.filterByType('dessert'))

    return newElement('div',
        appetizers,
        desserts
    )
    .addClass('column', 'is-6')
}
