export default function CollectionCard({ item }) {
    return (
        <div className="min-w-[200px] max-w-[200px] rounded-lg overflow-hidden bg-zinc-900 active:scale-95 transition-transform cursor-pointer">
            <div className="w-full h-[180px] bg-zinc-800">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
            <div className="p-2">
                <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                <p className="text-zinc-500 text-xs mt-0.5">...</p>
            </div>
        </div>
    )
}