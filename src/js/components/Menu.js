import { newElement } from '../DOM-builders'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

export default function Menu(store) {

    const Menu = newElement('div').addClass('container').setId('menu')

    store.addCallbackFor('SET_ITEMS', ({ items }) => {
        const leftside = MenuLeft(items)
        const rightside = MenuRight(items)
        const columns = newElement('section', leftside, rightside).addClass('columns')
        $('#menu').setChildren(columns)
    })

    store.addCallbackFor('ITEM_ADDED', ({ cart }) => {
        cart = [...cart]
        const articles = cart.map(id => `article[data-key="${id}"]`)
        const buttons = cart.map(id => `article[data-key="${id}"] button.add-to-cart`)

        $(articles.join(', ')).addClass('in-cart')
        $(buttons.join(', ')).attr('disabled', 'disabled')
    })

    store.addCallbackFor('ITEM_REMOVED', ({ cart }) => {
        const keysOnPage = $('article.in-cart').elements.map(a => parseInt(a.dataset.key, 10))
        const keysInState = [...cart]
        const keysToRemove = keysOnPage.filter(key => !keysInState.includes(key))

        keysToRemove.forEach(key => {
            $(`article[data-key="${key}"]`).removeClass('in-cart')
            $(`article[data-key="${key}"] button.add-to-cart`).attr('disabled', false)
        })
    })

    return Menu
}
