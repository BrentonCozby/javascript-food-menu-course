import App from './components/App'
import './helpers'
import 'whatwg-fetch'

const body = document.querySelector('body')

fetch('food.json')
.then(blob => blob.json())
.then(items => {
    body.insertBefore(App(items), body.childNodes[0])
})
