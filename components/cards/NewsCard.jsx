export default function NewsCard({ item }) {
    return (
        <div className="flex gap-3 w-full cursor-pointer active:scale-[0.99] transition-transform">
            <div className="w-[120px] h-[80px] rounded-lg flex-shrink-0 overflow-hidden">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
                <p className="text-zinc-400 text-xs mb-1">August 24, 2025</p>
                <p className="text-white text-sm font-semibold leading-snug line-clamp-2">{item.title}</p>
                <p className="text-zinc-500 text-xs mt-1">···</p>
            </div>
        </div>
    )
}