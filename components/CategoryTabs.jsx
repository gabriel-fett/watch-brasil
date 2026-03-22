const CATEGORIES = [
    { label: 'Football', page: 1 },
    { label: 'NBA', page: 2 },
    { label: 'F1', page: 3 },
]

export default function CategoryTabs({ activePage, onSelect }) {
    return (
        <div className="flex justify-center gap-2 px-4 py-3 border-b border-zinc-900 ">
            {CATEGORIES.map(cat => (
                <button
                    key={cat.page}
                    onClick={() => onSelect(cat.page)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activePage === cat.page
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    )
}