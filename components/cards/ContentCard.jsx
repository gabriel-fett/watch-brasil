export default function ContentCard({ item, fullWidth = false }) {
    return (
        <div className={`${fullWidth ? 'w-full' : 'min-w-[180px] max-w-[180px]'} rounded-xl overflow-hidden bg-zinc-900 cursor-pointer active:scale-95 transition-transform`}>
            <div className="relative w-full h-[90px] md:h-[130px] overflow-hidden">
                {/* z-index menor na imagem para o badge ficar na frente */}
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover z-0"
                    onError={(e) => e.target.style.display = 'none'}
                />
                {/* z-30 garante que o badge sempre aparece sobre a imagem */}
                <span className="absolute top-2 left-2 z-30 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider drop-shadow-md">
                    LIVE  NOW
                </span>
            </div>
            <div className="p-2.5">
                <div className="flex items-start justify-between gap-1">
                    <p className="text-white text-sm font-bold leading-tight line-clamp-2 flex-1">{item.title}</p>
                    <span className="text-zinc-500 text-sm flex-shrink-0 mt-0.5">···</span>
                </div>
                <p className="text-zinc-400 text-xs mt-1 truncate">{item.subtitle}</p>
            </div>
        </div>
    )
}