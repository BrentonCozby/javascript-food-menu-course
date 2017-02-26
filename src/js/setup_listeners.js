export default function(store) {
    /* setup a 'click' listener for every cart-item that will
    trigger a 'TOGGLE_SHOW_CART' event to the store */
    $('#cart-icon, #close').listenTo('click', function cb() {
        store.trigger('TOGGLE_SHOW_CART')
    })

    const getParentWithKey = element => {
        let parent = element.parentElement
        // goes up the parent hierarchy until it finds one with a key
        while(parent && !parent.dataset.key) {
            parent = parent.parentElement
        }
        return parent
    }

    $('.add-to-cart').listenTo('click', event => {
        const parent = getParentWithKey(event.currentTarget)
        const key = parseInt(parent.dataset.key, 10)
        store.trigger('ITEM_ADDED', { item: key })
    })

    $('body').listenTo('click', event => {
        if(event.target.classList.contains('remove')) {
            const element = event.target
            const parent = getParentWithKey(element)
            const key = parseInt(parent.dataset.key, 10)

            parent.parentElement.removeChild(parent)
            store.trigger('ITEM_REMOVED', { item: key })
        }
    })
}
