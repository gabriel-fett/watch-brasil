export default function ContentCard({ item }) {
    return (
        <div className="min-w-[220px] max-w-[220px] rounded-lg overflow-hidden bg-zinc-900 active:scale-95 transition-transform cursor-pointer">
            <div className="w-full h-[130px] bg-zinc-800 overflow-hidden relative">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    LIVE NOW
                </span>
            </div>
            <div className="p-2">
                <div className="flex items-start justify-between gap-1">
                    <p className="text-white text-sm font-semibold leading-tight line-clamp-2 flex-1">{item.title}</p>
                    <span className="text-zinc-500 text-xs flex-shrink-0">...</span>
                </div>
                <p className="text-zinc-400 text-xs mt-1 truncate">{item.subtitle}</p>
            </div>
        </div>
    )
}