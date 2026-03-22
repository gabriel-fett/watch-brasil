import CollectionCard from './cards/CollectionCard'
import NewsCard from './cards/NewsCard'
import TeamCard from './cards/TeamCard'

export default function List({ shelf }) {
    const firstDomain = shelf.items[0]?.domain

    const isTeam = firstDomain === 'Team'
    const isNews = firstDomain === 'News'

    if (isTeam) {
        return (
            <div className="py-4">
                <div className="px-4 mb-3">
                    <h2 className="text-white font-bold text-base uppercase tracking-wide">{shelf.title}</h2>
                    {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
                </div>
                <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-none">
                    {shelf.items.map(item => <TeamCard key={item.id} item={item} />)}
                </div>
            </div>
        )
    }

    if (isNews) {
        return (
            <div className="py-4">
                <div className="px-4 mb-3">
                    <h2 className="text-white font-bold text-base uppercase tracking-wide">{shelf.title}</h2>
                    {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
                </div>
                <div className="flex flex-col gap-3 px-4">
                    {shelf.items.map(item => <NewsCard key={item.id} item={item} />)}
                </div>
            </div>
        )
    }

    return (
        <div className="py-4">
            <div className="px-4 mb-3">
                <h2 className="text-white font-bold text-base uppercase tracking-wide">{shelf.title}</h2>
                {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3 px-4">
                {shelf.items.map(item => <CollectionCard key={item.id} item={item} />)}
            </div>
        </div>
    )
}