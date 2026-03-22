import ContentCard from './cards/ContentCard'
import TeamCard from './cards/TeamCard'
import NewsCard from './cards/NewsCard'
import CollectionCard from './cards/CollectionCard'

function renderCard(item, mobile = true) {
    switch (item.domain) {
        case 'Content':
            return <ContentCard key={item.id} item={item} fullWidth={!mobile} />
        case 'Team':
            return <TeamCard key={item.id} item={item} />
        case 'News':
            return (
                <div key={item.id} className={mobile ? 'min-w-[280px] max-w-[280px]' : 'w-full'}>
                    <NewsCard item={item} />
                </div>
            )
        case 'Collection':
            return (
                <div key={item.id} className={mobile ? 'min-w-[160px] max-w-[160px]' : 'w-full'}>
                    <CollectionCard item={item} />
                </div>
            )
        default: return null
    }
}

export default function Carousel({ shelf }) {
    const domain = shelf.items[0]?.domain

    const desktopCols = {
        Content: 'md:grid-cols-2 lg:grid-cols-3',
        Team: 'md:grid-cols-5 lg:grid-cols-7',
        News: 'md:grid-cols-2',
        Collection: 'md:grid-cols-3 lg:grid-cols-4',
    }

    const cols = desktopCols[domain] || 'md:grid-cols-3'

    return (
        <div>
            <div className="border-t border-zinc-800 mx-6 mb-6" />

            <div className="px-6 mb-5">
                {/* Barra colorida à esquerda do título — identidade visual */}
                <div className="flex items-start gap-3">
                    <div className="w-1 h-6 bg-blue-500 rounded-full mt-0.5 flex-shrink-0" />
                    <div>
                        <h2 className="text-white font-black text-lg uppercase tracking-wide leading-tight">{shelf.title}</h2>
                        {shelf.subtitle && <p className="text-zinc-300 text-sm mt-1">{shelf.subtitle}</p>}
                    </div>
                </div>
            </div>

            {/* Mobile: scroll horizontal */}
            <div className="md:hidden flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-none">
                {shelf.items.map(item => renderCard(item, true))}
            </div>

            {/* Desktop: grid */}
            <div className={`hidden md:grid ${cols} gap-4 px-6`}>
                {shelf.items.map(item => renderCard(item, false))}
            </div>
        </div>
    )
}