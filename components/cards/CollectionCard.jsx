export default function CollectionCard({ item }) {
    return (
        <div className="w-full rounded-xl overflow-hidden bg-zinc-900 cursor-pointer active:scale-95 transition-transform">
            <div className="w-full aspect-[3/4] bg-zinc-800 overflow-hidden">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
            <div className="p-2.5 flex items-center justify-between">
                <p className="text-white text-sm font-semibold truncate flex-1">{item.title}</p>
                <span className="text-zinc-500 text-sm ml-2 flex-shrink-0">···</span>
            </div>
        </div>
    )
}