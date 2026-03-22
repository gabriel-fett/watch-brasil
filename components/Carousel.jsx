import ContentCard from './cards/ContentCard'
import TeamCard from './cards/TeamCard'
import NewsCard from './cards/NewsCard'
import CollectionCard from './cards/CollectionCard'

function renderCard(item) {
    switch (item.domain) {
        case 'Content': return <ContentCard key={item.id} item={item} />
        case 'Team': return <TeamCard key={item.id} item={item} />
        case 'News':
            return (
                <div key={item.id} className="min-w-[280px] max-w-[280px]">
                    <NewsCard item={item} />
                </div>
            )
        case 'Collection':
            return (
                <div key={item.id} className="min-w-[160px] max-w-[160px]">
                    <CollectionCard item={item} />
                </div>
            )
        default: return null
    }
}

export default function Carousel({ shelf }) {
    return (
        <div className="py-5">
            <div className="px-4 mb-3">
                <h2 className="text-white font-black text-base uppercase tracking-wide">{shelf.title}</h2>
                {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
            </div>
            <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-none">
                {shelf.items.map(item => renderCard(item))}
            </div>
        </div>
    )
}