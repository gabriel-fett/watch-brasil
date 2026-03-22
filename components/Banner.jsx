'use client'

import { useState } from 'react'

export default function Banner({ shelf }) {
    const [active, setActive] = useState(0)
    const item = shelf.items[active]

    return (
        <div className="relative w-full overflow-hidden bg-black">
            <div className="relative w-full h-[380px]">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-8 left-0 right-0 px-6 flex flex-col items-center">
                    <h1 className="text-white font-black text-2xl uppercase text-center leading-tight mb-5">
                        {item.title}
                    </h1>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-md transition-colors w-full justify-center max-w-xs">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                        Watch Now
                    </button>
                </div>
            </div>

            {shelf.items.length > 1 && (
                <div className="flex justify-center gap-2 py-4 bg-black">
                    {shelf.items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-1.5 rounded-full transition-all ${i === active ? 'w-8 bg-white' : 'w-2 bg-zinc-600'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}