import { newElement } from '../DOM-builders'

export default function Hero(...children) {

    const logo = newElement('img')
        .attr('src', 'static/fancybear_white.png')
        .addClass('logo')

    const the = newElement('p')
        .text('The')
        .addClass('hero-text-light')

    const fancyBear = newElement('p')
        .text('Fancy Bear')
        .addClass('hero-text-bold')

    const eateries = newElement('p')
        .text('Eateries')
        .addClass('hero-text-light')

    const container = newElement('div',
            logo,
            the,
            fancyBear,
            eateries
        )
        .addClass('container')

    const heroContent = newElement('div', container)
        .addClass('hero-content')
    
    return newElement('section', ...children,
        heroContent
    )
    .addClass('hero', 'splash')
}
