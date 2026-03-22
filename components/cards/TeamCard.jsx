export default function TeamCard({ item }) {
    return (
        <div className="flex flex-col items-center min-w-[120px] max-w-[120px] cursor-pointer active:scale-95 transition-transform">
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-zinc-700">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-contain p-1.5"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
            <p className="text-white text-xs font-semibold text-center mt-2 w-full px-1 truncate">{item.title}</p>
            <p className="text-zinc-500 text-xs text-center mt-0.5">···</p>
        </div>
    )
}