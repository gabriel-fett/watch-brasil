import Banner from './Banner'
import Carousel from './Carousel'
import List from './List'

export default function ShelfRenderer({ shelf }) {
    switch (shelf.layout) {
        case 'Banner': return <Banner shelf={shelf} />
        case 'Carousel': return <Carousel shelf={shelf} />
        case 'List': return <List shelf={shelf} />
        default: return null
    }
}