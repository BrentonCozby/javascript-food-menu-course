import { newElement } from '../DOM-builders'
import Navbar from './Navbar'
import Hero from './Hero'
import Menu from './Menu'
import Bottom from './Bottom'
import Modal from './Modal'

export default function App(store) {
    return newElement('div',
        Modal(store),
        Navbar(),
        Hero(),
        Menu(store),
        Bottom()
    )
    .setId('App-container')
}
