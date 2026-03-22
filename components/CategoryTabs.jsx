const CATEGORIES = [
    { label: 'Football', page: 1 },
    { label: 'NBA', page: 2 },
    { label: 'F1', page: 3 },
]

export default function CategoryTabs({ activePage, onSelect }) {
    return (
        <div className="flex justify-center gap-3 px-4 py-3 bg-black border-b border-zinc-900">
            {CATEGORIES.map(cat => (
                <button
                    key={cat.page}
                    onClick={() => onSelect(cat.page)}
                    className={`px-6 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all ${activePage === cat.page
                            ? 'bg-blue-600 text-white'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    )
}