import { newElement } from '../DOM-builders'

export default function Bottom() {

    const name = newElement('p').text('Created by Alex Sears.')

    const content = newElement('div',
            name
        )
        .addClass('content', 'is-centered')

    const container = newElement('div',
            content
        )
        .addClass('container')

    return newElement('footer',
        container
    )
    .addClass('footer')
}
