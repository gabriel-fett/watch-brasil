import CollectionCard from './cards/CollectionCard'
import NewsCard from './cards/NewsCard'
import TeamCard from './cards/TeamCard'

// Componente de cabeçalho de seção — igual ao Carousel para consistência visual
function SectionHeader({ title, subtitle }) {
    return (
        <div className="px-6 mb-5">
            <div className="flex items-start gap-3">
                {/* Barra azul — identidade visual consistente com Carousel */}
                <div className="w-1 h-6 bg-blue-500 rounded-full mt-0.5 flex-shrink-0" />
                <div>
                    <h2 className="text-white font-black text-lg uppercase tracking-wide leading-tight">{title}</h2>
                    {subtitle && <p className="text-zinc-300 text-sm mt-1">{subtitle}</p>}
                </div>
            </div>
        </div>
    )
}

export default function List({ shelf }) {
    const firstDomain = shelf.items[0]?.domain

    if (firstDomain === 'Team') {
        return (
            <div>
                <div className="border-t border-zinc-800 mx-6 mb-6" />
                <SectionHeader title={shelf.title} subtitle={shelf.subtitle} />
                <div className="md:hidden flex gap-4 overflow-x-auto px-6 pb-2 scrollbar-none">
                    {shelf.items.map(item => <TeamCard key={item.id} item={item} />)}
                </div>
                <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-8 gap-4 px-6">
                    {shelf.items.map(item => <TeamCard key={item.id} item={item} />)}
                </div>
            </div>
        )
    }

    if (firstDomain === 'News') {
        return (
            <div>
                <div className="border-t border-zinc-800 mx-6 mb-6" />
                <SectionHeader title={shelf.title} subtitle={shelf.subtitle} />
                <div className="flex flex-col px-6 md:grid md:grid-cols-2 md:gap-x-8">
                    {shelf.items.map((item) => (
                        <div key={item.id}>
                            <NewsCard item={item} />
                            <div className="border-b border-zinc-800 my-4" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Collection — grid 2 colunas mobile, 4 desktop
    return (
        <div>
            <div className="border-t border-zinc-800 mx-6 mb-6" />
            <SectionHeader title={shelf.title} subtitle={shelf.subtitle} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6">
                {shelf.items.map(item => <CollectionCard key={item.id} item={item} />)}
            </div>
        </div>
    )
}