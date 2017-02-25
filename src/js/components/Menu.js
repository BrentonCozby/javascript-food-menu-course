import { newElement } from '../DOM-builders'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

export default function Menu(items = []) {

    const columns = newElement('section',
            MenuLeft(items),
            MenuRight(items)
        )
        .addClass('columns')

    return newElement('div',
        columns
    )
    .addClass('container')
    .setId('menu')
}
