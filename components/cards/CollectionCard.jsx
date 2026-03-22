export default function CollectionCard({ item }) {
    return (
        <div className="w-full rounded-xl overflow-hidden cursor-pointer active:scale-95 transition-transform">
            <div className="relative w-full aspect-[2/3] md:aspect-video overflow-hidden">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />

                {/* Gradient escuro no bottom para o texto aparecer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Título e subtitle sobrepostos na imagem */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-bold leading-tight line-clamp-1">{item.title}</p>
                    {item.subtitle && (
                        <p className="text-zinc-300 text-xs mt-0.5 line-clamp-2 leading-snug">{item.subtitle}</p>
                    )}
                </div>
            </div>
        </div>
    )
}