export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-4 bg-black sticky top-0 z-50">
            <button className="text-white">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M4.93 4.93c4.69 4.69 9.21 9.21 14.14 14.14" />
                    <path d="M19.07 4.93C14.38 9.62 9.86 14.14 4.93 19.07" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                </svg>
                <span className="font-black text-xl tracking-widest uppercase text-white">Watch</span>
            </div>

            <div className="w-6" />
        </header>
    )
}