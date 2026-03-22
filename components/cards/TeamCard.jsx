export default function TeamCard({ item }) {
    return (
        <div className="flex flex-col items-center min-w-[110px] max-w-[110px] active:scale-95 transition-transform cursor-pointer">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-800">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-contain p-1"
                    onError={(e) => e.target.style.display = 'none'}
                />
            </div>
            <p className="text-white text-xs font-semibold text-center mt-2 w-full truncate">{item.title}</p>
            <p className="text-zinc-500 text-xs text-center">...</p>
        </div>
    )
}