import App from './components/App'
import 'whatwg-fetch'
import './helpers'

import setupListeners from './setup_listeners'
import { createStore } from './state'
import reducer from './reducer'

const store = createStore(reducer)
const body = document.querySelector('body')

fetch('food.json')
.then(res => res.json())
.then(items => {
    body.insertBefore(App(store), body.childNodes[0])
    store.trigger('SET_ITEMS', { items })
    setupListeners(store)
})
