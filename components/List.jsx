import CollectionCard from './cards/CollectionCard'
import NewsCard from './cards/NewsCard'
import TeamCard from './cards/TeamCard'

export default function List({ shelf }) {
    const firstDomain = shelf.items[0]?.domain

    if (firstDomain === 'Team') {
        return (
            <div className="py-5">
                <div className="px-4 mb-3">
                    <h2 className="text-white font-black text-base uppercase tracking-wide">{shelf.title}</h2>
                    {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
                </div>
                <div className="flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-none">
                    {shelf.items.map(item => <TeamCard key={item.id} item={item} />)}
                </div>
            </div>
        )
    }

    if (firstDomain === 'News') {
        return (
            <div className="py-5">
                <div className="px-4 mb-3">
                    <h2 className="text-white font-black text-base uppercase tracking-wide">{shelf.title}</h2>
                    {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
                </div>
                <div className="flex flex-col px-4">
                    {shelf.items.map((item, i) => (
                        <div key={item.id}>
                            <NewsCard item={item} />
                            {i < shelf.items.length - 1 && (
                                <div className="border-b border-zinc-800 my-3" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Collection — grid 2 colunas
    return (
        <div className="py-5">
            <div className="px-4 mb-3">
                <h2 className="text-white font-black text-base uppercase tracking-wide">{shelf.title}</h2>
                {shelf.subtitle && <p className="text-zinc-400 text-xs mt-0.5">{shelf.subtitle}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3 px-4">
                {shelf.items.map(item => <CollectionCard key={item.id} item={item} />)}
            </div>
        </div>
    )
}