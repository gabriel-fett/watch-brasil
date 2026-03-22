'use client'

import { useState, useEffect } from 'react'
import { getShelves } from '@/services/api'
import Header from '@/components/Header'
import CategoryTabs from '@/components/CategoryTabs'
import ShelfRenderer from '@/components/ShelfRenderer'

function LoadingSkeleton() {
  return (
    <div className="px-6 py-4 space-y-6">
      <div className="w-full h-[300px] bg-zinc-800 rounded-lg animate-pulse" />
      <div>
        <div className="h-4 w-40 bg-zinc-800 rounded animate-pulse mb-3" />
        <div className="flex gap-3">
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activePage, setActivePage] = useState(1)
  const [shelves, setShelves] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getShelves(activePage)
      .then(data => setShelves(data))
      .finally(() => setLoading(false))
  }, [activePage])

  return (
    <main className="w-full min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[448px] md:max-w-[720px] lg:max-w-[1024px] bg-black min-h-screen md:shadow-[0_0_0_1px_#27272a]">
        <Header />
        <CategoryTabs activePage={activePage} onSelect={setActivePage} />

        {loading ? (
          <LoadingSkeleton />
        ) : shelves.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-zinc-500 text-sm">Aguarde, conectando à API...</p>
          </div>
        ) : (
          <div className="pb-10">
            {shelves.map(shelf => (
              // py-6 garante respiro entre cada seção
              <div key={shelf.id} className="py-6">
                <ShelfRenderer shelf={shelf} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}