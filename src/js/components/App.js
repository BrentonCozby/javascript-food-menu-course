import { newElement } from '../DOM-builders'
import Navbar from './Navbar'
import Hero from './Hero'
import Menu from './Menu'

export default function App(items = []) {
    return newElement('div',
        Navbar(),
        Hero(),
        Menu(items)
    )
    .setId('App-container')
}
